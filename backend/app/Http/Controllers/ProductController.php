<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return $this->showAll($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'sku' => 'required|string|max:50|unique:products',
            'description' => 'required|string',
            'image' => 'required|file|mimes:jpg,png',
            'price' => 'required|integer|min:0',
            'stock_quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }

        $path = 'no-image';

        if ($request->hasFile('image')) {
            $path = Storage::putFile('products_images', $request->file('image'));
        }

        $product = Product::create(
            array_merge(
                $request->all(), 
                [
                    "status" => Product::PRODUCT_AVAILABLE,
                    "image_url" => $path,
                ]
            )
        );
        
        return $this->showOne($product, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return $this->showOne($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string|max:100',
            'sku' => 'string|max:50|unique:products',
            'image' => 'nullable|file|mimes:jpg,png',
            'description' => 'string',
            'price' => 'integer|min:0',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }

        $dataToUpdate = $request->only([
            'sku',
            'name',
            'description',
            'price',
        ]);

        if ($request->hasFile('image')) {
            Storage::delete($product->image->url);
            $path = Storage::putFile('products_images', $request->file('image'));
            array_push($dataToUpdate, ["image_url" => $path]);

        }


        $product->fill($dataToUpdate);

        if($product->isClean()){
            return $this->errorResponse("you must update at least one field to use this action", 422);
        }

        $product->save();

        return $this->showOne($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product = Product::findOrFail($product->id);
        $product->delete();

        return $this->showOne($product);
    }
}

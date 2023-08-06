<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = User::all();
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
            'name' => 'required|string|max:50',
            'surname' => 'required|string|max:50',
            'phone_number' => 'required|max:50',
            'email' => 'required|string|max:50|email|unique:users',
            'password' => ['required','string', 'confirmed',Password::min(8)]
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }

        $fields = $request->all();

        $fields['password'] = encrypt($request->password);
        $fields['is_admin'] = User::REGULAR_USER;

        unset($fields['password_confirmation']);

        $user = User::create($fields);

        return $this->showOne($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:50',
            'surname' => 'string|max:50',
            'phone_number' => 'string|max:50',
            'email' => 'string|max:50|email|unique:users,email,'.$user->id,//dns slow of verification
            'password' => ['string', 'confirmed',Password::min(8)],
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }

        if($request->has('name')){
            $user->name = $request->name;
        }

        if($request->has('surname')){
            $user->name = $request->name;
        }

        if($request->has('email') && $user->email != $request->email){
            $user->email = $request->email;
        }

        if($request->has('password')){
              $user->password = Crypt::encrypt($request->password);
        }



        if(!$user->isDirty()){
            return $this->errorResponse("change at least one field to be able update", 422);
        }

        $user->update();

        return $this->showOne($user);
    }

      /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $product = User::findOrFail($user->id);

        $user->delete();

        return $this->showOne($user);
    }
}

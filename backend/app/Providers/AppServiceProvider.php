<?php

namespace App\Providers;

use App\Models\Product;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Product::updated(function($product){
            if($product->stock_quantity  == 0 ){
                $product->status = Product::PRODUCT_NOT_AVAILABLE;

                $product->update();
            } 
        });
    }
}

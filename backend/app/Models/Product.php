<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    const PRODUCT_AVAILABLE = 'available';
    const PRODUCT_NOT_AVAILABLE = 'not available';

    protected $fillable = [
        'name', 
        'sku', 
        'description', 
        'image_url',
        'price', 
        'stock_quantity',
    ];

    public function isAvailable(){
        return $this->status == Product::PRODUCT_AVAILABLE;
    }

    public function sales(){
        return $this->hasMany(Sale::class);
    }

    
}

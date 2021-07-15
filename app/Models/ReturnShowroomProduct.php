<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnShowroomProduct extends Model
{

    public function product(){

           return $this->belongsTo('App\Models\Product','product_id') ;
      }
}

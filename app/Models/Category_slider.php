<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category_slider extends Model
{
    public function category(){

        return $this->belongsTo('App\Models\Category','category_id');

    }
    public function sub_category(){
      return $this->belongsTo('App\Models\SubCategory','sub_category_id');

    }
    public function sub_sub_category(){
   
        return $this->belongsTo('App\Models\SubSubCategory','sub_sub_category_id');
     
    }
}

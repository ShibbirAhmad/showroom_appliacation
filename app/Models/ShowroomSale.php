<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShowroomSale extends Model
{
     public function sale_items(){
         return $this->hasMany("App\Models\ShowroomSaleItem",'showroom_sale_id') ;
     }
}

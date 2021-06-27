<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShowroomCustomerDue extends Model
{

    public function sale()
      {
          return  $this->belongsTo('App\Models\ShowroomSale','showroom_sale_id');
      }



}

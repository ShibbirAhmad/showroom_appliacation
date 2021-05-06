<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShowroomDebit extends Model
{
     public function manager(){
        return $this->belongsTo('App\Models\ShowroomManager','insert_manager_id');
    }
}

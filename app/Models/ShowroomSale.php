<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class ShowroomSale extends Model
{
     public function sale_items(){
         return $this->hasMany("App\Models\ShowroomSaleItem",'showroom_sale_id') ;
     }


     public static function sendMessageToCustomer($showroom_name,$customer,$sale){

           $api_key = "C2008152606a0667d09517.17216453";
            $contacts = $customer->phone;
            $senderid = '8809612446732';
            $sms = 'Dear '.$customer->name.'.'.' Thanks for purchase from ' . $showroom_name . ' the payable amount is '.$sale->total.' BDT and your invoice number is '.$sale->invoice_no. '.' ;   // put here your dynamic message text here
            $URL = "http://bulk.fmsms.biz/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $URL);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 0);
            try {
                $output = $content = curl_exec($ch);
            //  print_r($output);
            } catch (Exception $ex) {
            return back();
            }
            return $output;
        }





}

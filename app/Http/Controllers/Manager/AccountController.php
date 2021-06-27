<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Models\ShowroomCredit ;
use App\Models\ShowroomCustomerDue ;
use App\Models\ShowroomDebit ;
use Maatwebsite\Excel\Facades\Excel ;
use App\Exports\CreditExport ;
use App\Exports\DebitExport ;

class AccountController extends Controller
{

    public function credits(Request $request){

            $paginate=$request->item ?? 20;

            if($request->status=='all'){
                    $crdits=ShowroomCredit::orderBy('id','DESC')->with('manager')->paginate($paginate);
                    return response()->json($crdits);
             }

             if($request->status=='search'){
                $crdits=ShowroomCredit::where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
                return response()->json($crdits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $crdits=ShowroomCredit::whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
            }else{
                $crdits=ShowroomCredit::whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with('manager')
                                ->paginate($paginate);
            }

            return response()->json($crdits);

         }


    }



    public function creditItem($id)
    {
           $credit=ShowroomCredit::find($id);
           if($credit){
            return response()->json([
                'status' => 'SUCCESS',
                'credit' => $credit ,
            ]);
           }

    }


    public function creditStore(Request $request)
        {
            $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'credit_in' => 'required',
                'amount' => 'required',
            ]);

            $credit =new ShowroomCredit();
            $credit->showroom_id = session()->get('manager')['showroom_id'];
            $credit->insert_manager_id = session()->get('manager')['id'];
            $credit->credit_in = $request->credit_in;
            $credit->purpose = $request->purpose;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "credit  inserted",
                ]);


        }

    public function creditUpdate(Request $request,$id)
    {

         $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'credit_in' => 'required',
                'amount' => 'required',
            ]);

            $credit =ShowroomCredit::findOrFail($id);
            $credit->showroom_id = session()->get('manager')['showroom_id'];
            $credit->insert_manager_id = session()->get('manager')['id'];
            $credit->credit_in = $request->credit_in;
            $credit->purpose = $request->purpose;
            $credit->amount = $request->amount;
            $credit->comment = $request->comment ?? null;
            $credit->date = $request->date;
            $credit->save();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "credit  updated",
                ]);


    }


    public function destroy_credit(Request $request, $id)
    {
            $credit=ShowroomCredit::find($id);
            if($credit){
                if($credit->delete()){
                    return response()->json([
                        'status' => 'SUCCESS',
                        'message' => "credit  deleted",
                    ]);
                }
            }

    }





    //start debit method

    public function debits(Request $request)
    {
            $paginate=$request->item??20;
              if($request->status=='all'){
                    $debits=ShowroomDebit::orderBy('id','DESC')->with(['manager'])->paginate($paginate);
                    return response()->json($debits);
             }
             if($request->status=='search'){
                $debits=ShowroomDebit::where('purpose', 'like', '%' . $request->search . '%')
                                ->orWhere('comment', 'like', '%' . $request->search . '%')
                                ->orWhere('amount', 'like', '%' . $request->search . '%')
                                ->orWhere('date', 'like', '%' . $request->search . '%')
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
                return response()->json($debits);
         }
         if($request->status=='filter'){


            if(!empty($request->start_date) && empty($request->end_date)){
                $debits=ShowroomDebit::whereDate('date','=',$request->start_date)
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
            }else{
                $debits=ShowroomDebit::whereDate('date','>=',$request->start_date)
                                ->whereDate('date','<=',$request->end_date)
                                ->orderBy('id','DESC')->with(['manager'])
                                ->paginate($paginate);
            }

            return response()->json($debits);

         }

    }

    public function debitStore(Request $request)
    {
       // return $request->all();
            $validatedData = $request->validate([
            'date'=>'required|before:tomorrow',
            'purpose' => 'required',
            'amount' => 'required',
            'debit_from'=>'required',
            //   'signature'=>'required'
        ]);

        // //make signature image
        // $name='debit-signature-'.time().'.png';
        // Image::make(file_get_contents($request->signature))->save(public_path('storage/images/debitSignature/').$name);

        $debit = new ShowroomDebit();
        $debit->showroom_id = session()->get('manager')['showroom_id'];
        $debit->purpose = $request->purpose;
        $debit->debit_from=$request->debit_from;
        $debit->amount = $request->amount;
        $debit->comment = $request->comment ?? null;
        $debit->date = $request->date;
        $debit->insert_manager_id=session()->get('manager')['id'];
        // $debit->signature='images/debitSignature/'.$name;
         $debit->save();
          return response()->json([
                'status' => 'SUCCESS',
                'message' => "debit created",
            ]);

    }


    public function debitItem($id)
    {
            $debit=ShowroomDebit::find($id);
            if($debit){
             return response()->json([
                 'status' => 'SUCCESS',
                 'debit' => $debit ,
             ]);
            }
    }


    public function debitUpdate(Request $request,$id)
    {

            $validatedData = $request->validate([
                'date'=>'required|before:tomorrow',
                'purpose' => 'required',
                'amount' => 'required',
                'debit_from' => 'required',
            ]);

            $debit =ShowroomDebit::find($id);
            $debit->purpose = $request->purpose;
            $debit->debit_from=$request->debit_from;
            $debit->amount = $request->amount;
            $debit->comment = $request->comment ?? null;
            $debit->date = $request->date;
            if ($debit->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "debit was successfully updated",
                ]);
        }
    }


    public function debitDelete($id)
    {
            $debit=ShowroomDebit::find($id);
                $debit->delete();
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => "debit  deleted",
                ]);
    }










    public function getCustomerDue(Request $request)
    {
          $paginate_item=$request->item ?? 20 ;
          $showroom_id=session()->get('manager')['showroom_id'];
          $due_customers=ShowroomCustomerDue::where('showroom_id',$showroom_id)->orderBy('id','desc')->where('amount','>',0)->with('sale')->paginate($paginate_item);
          return response()->json([
                "status" => "OK",
                "due_customers" => $due_customers ,
          ]);
    }


    public function  duePaid(Request $request,$id){

        $customer_due=ShowroomCustomerDue::findOrFail($id);

        if($request->amount > $customer_due->amount){
            return response()->json('Due Amount '.$customer_due->amount.' But Request Amount '. $request->amount);
        }

        $customer_due->amount=$customer_due->amount-$request->amount;
        if($customer_due->save()){

          //create a credit.......
        $credit = new ShowroomCredit();
        $credit->purpose ="Due amount, Paid....";
        $credit->amount =$request->amount;
        $credit->comment ="customer due amount paid.... Extra Hint(Paid Amount: ". $request->amount.' Due Amount: '.($customer_due->amount+$request->amount);
        $credit->date =  date('Y-m-d');
        $credit->credit_in=$request->paid_by;
        $credit->showroom_id = session()->get('manager')['showroom_id'];
        $credit->insert_manager_id=session()->get('manager')['id'];
        $credit->save();
         return response()->json([
                'status' => 'SUCCESS',
                'message' => 'paid successfully',
                'due'=>$customer_due
            ]);
        }
    }









}

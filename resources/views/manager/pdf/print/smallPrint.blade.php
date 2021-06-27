<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <title>Print || Invoice</title>


    <style>

        .pull-right.moha_add_inv p {
            line-height: .5;
        ;
        }
        .pull-right.moha_add_inv {
            text-align: right;
            margin-right: 120px !important;
            margin-top: 20px;
        }

        body {
            background: #ddd;
        }

        .print {
            background: #fff;
            padding:28px;
            display:block;
        }
        .page-break {
            page-break-after: always;
            background-color: #fff;
            padding-bottom: 50px;
            padding-top: 15px;
            margin-bottom: 10px;
            width: 70%;
        }
        .col-lg-4{
            text-align: center;
            width: 35% !important;
            margin: 0;
            padding:0;
            margin-left: 20px;
        }
        .col-lg-6{
            text-align: center;
            width: 60% !important;
            margin: 0;
            padding:0;
        }
        @media print {
            #print {
                display: none;
            }
        }
        .btn-pr{
            text-align: right;
            display: block;
            position: fixed;
            right:0;
            top: 280px;
        }
        .btn-pr button{
            height: 50px;
        }
 .rotate-logo {
    position: fixed;
    left: 30%;
    top:20%;
    right: 0;
    bottom: 50%;
    width: 502px;
    font-size: 24px;
    opacity: 0.2;

}

.rotate-logo img{
width: 350px;
}

.address_container {
    width: 450px;
    margin: auto;
    text-align: center;
    margin-top: 25px;
}

.address_container p {
    line-height: 0.4;
}

.address_p {
    margin-top: 10px;
}

.ul_1 li {
    list-style-type: none;
}

    </style>

</head>
<body>
<div class="btn-pr">
    <button class="btn btn-success text-center print-button" onclick="allPrint()" id="print"><i class="fa fa-print"></i></button>
</div>

 <div class="container page-break">

        <div class="row ">
            <div class="col-lg-11 col-md-11 col-sm-11">

                <ul class="ul_1">
                    <li> <h6>{{ $showroom->name }} </h6> </li>
                    <li> <h6> Location : {{ $showroom->address }}</h6>   </li>
                    <li> <h6> Contact: {{ $showroom->contact_number }}</h6>  </li>
                </ul>

               <ul>
                    <li> Date: <?php echo date("d-m-Y"); ?>  </li>
                   <li> Invoice No:  {{ $sale->invoice_no }}  </li>
                   <li> Name:    {{ $sale->customer_name }}  </li>
                   <li> Phone:    {{ $sale->customer_phone }}  </li>
                   <li> Address :    {{ $sale->customer_address }}  </li>
               </ul>

               <ul>
                     @foreach ($sale_items as $k=> $item)
                             <li> product:  {{$item->product->name}} - {{$item->product->product_code}}</li>
                             <li> size : {{ $item->varinat->name ?? '-'  }} </li>
                             <li> price : {{ $item->price }} </li>
                             <li> quantity : {{ $item->quantity }} </li>
                     @endforeach

               </ul>
               <ul>
                   <li> paid : {{ $sale->paid }} TK </li>
                   <li> Discount  : {{ $sale->discount }}  TK</li>
                   <li> Due  : {{ $sale->due_amount }} TK </li>
                   <li> Total : {{ $sale->total }} TK </li>
               </ul>



            </div>
        </div>



    </div>


<script>
    function allPrint() {
        window.print();
    };

    window.addEventListener('DOMContentLoaded', (event) => {
      window.print();
    });

    window.addEventListener('click',function(){
         //let a=console.log('c');

         console.log(a);

    });

</script>

</body>
</html>
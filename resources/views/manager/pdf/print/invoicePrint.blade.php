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


    </style>

</head>
<body>
<div class="btn-pr">
    <button class="btn btn-success text-center print-button" onclick="allPrint()" id="print"><i class="fa fa-print"></i></button>
</div>

 <div class="container page-break">
        <div class="row justify-content-center break">
            <div class="col-lg-12">
                <div class="address_container">
                    <img class="inv_logo" src="{{ asset('frontend/image/logo.png') }}" alt="logo" width="200">
                    <div class="address_p" >
                        <p>Office: Houes:36,Road:06,Benaroshi Polli,Mirpur-10,Dhaka-1216.

                        </p>
                        <p>E-mail: :madinafashion2017@gmail.com</p>
                        <p>Mobile: +88 01715-900066</p>
                        <p><strong>Date: <?php echo date("d-m-Y"); ?> </strong></p>


                    </div>
                </div>
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-lg-11 col-md-11 col-lg-offset-1 col-md-offset-1">

                <table class="table table-bsaleed moha_tbl_inv" style="margin-top: 5px;">

                    <tbody>
                    <tr>
                        <th colspan="2" class="text-left"> Name &nbsp;:
                        <span style="font-size:15px;">
                           {{ $sale->customer_name }}
                            </span>

                        </th>
                         <th colspan="3" class="text-left"> Phone &nbsp;:
                        <span style="font-size:15px;">
                           {{ $sale->customer_phone }}
                            </span>

                        </th>


                        <th  colspan="2" class="text-left">Invoice No : {{$sale->invoice_no}}</th>
                    </tr>

                    <tr>
                        <td colspan="4" class="text-left" style="text-transform: capitalize;"><b>Address  : </b><b>

                                @if(!empty($sale->customer_address))
                                    {{ $sale->customer_address. ',' }}
                                @endif

                            </b>
                        </td>

                    </tr>

                    <tr>
                        <th class="text-left">No</th>
                        <th class="text-center" >Product</th>
                         <th class="text-left">Size</th>
                        <th class="text-right">Price</th>
                        <th class="text-right">Qty</th>
                        <th class="text-right">Total</th>
                    </tr>
                    @foreach($sale_items as $k=> $item)

                        <tr>

                            <td class="text-center">{{$k+1}}</td>
                            <td  style="text-transform: capitalize;">

                                {{$item->product->name}} - {{$item->product->product_code}}

                            </td>
                            <td>
                                 {{$item->variant->name ?? '-'}}
                            </td>

                            <td class="text-center">
                                {{$item->price}}
                            </td>
                            <td class="text-center">
                                <span style="bsale: 1px solid #000;">
                                    <b style="font-size: 16px;padding:5px 5px 5px 5px;"> {{$item->quantity}}</b></span></td>
                            <td class="text-right">{{$item->total }} Tk</td>
                        </tr>
                    @endforeach

                        <tr>
                            <td colspan="5" class="text-right">Discount:</td>
                            <td class="text-right"> {{$sale->discount}} Tk</td>
                        </tr>
                         <tr>
                            <td colspan="5" class="text-right">Paid:</td>
                            <td class="text-right"> {{$sale->paid}} Tk</td>
                        </tr>
                         <tr>
                            <td colspan="5" class="text-right">Amount Due:</td>
                            <td class="text-right">{{ $sale->total - ($sale->discount+$sale->paid) }} Tk</td>
                        </tr>

                    </tbody>
                </table>



            </div>
        </div>



    </div>

 <div class="rotate-logo">
            <img src="{{ asset('rotatelogo.png') }}" alt="">
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
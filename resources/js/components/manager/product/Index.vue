<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
       <br/>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Product Table</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="productList()"
                      >
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                     <div class="col-lg-4">
                    </div>
                    <div class="col-lg-6">
                      <input
                        class="form-control"
                        placeholder="search with product code or name"
                        v-model="search"
                        @keyup="productSearch()"
                      />
                    </div>

                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-striped table-bordered text-center table-hover">
                    <thead>
                      <tr>
                        <th width="5%">#</th>
                        <th width="25%">Name</th>
                        <th width="10%">Barcode</th>
                        <th width="15%">Image</th>
                        <th width="10%" scope="col">Purchase price</th>
                        <th width="10%" scope="col">Sale price</th>
                        <th width="10%">Stock</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr
                        v-for="(product, index) in products.data"
                        v-else
                        :key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ product.name }}</td>
                        <td style="width:100px;">
                          <p
                            v-html="product.product_barcode.barcode"
                            class="barcode"
                          ></p>
                          <span style="margin-left:-10%" >{{
                            product.product_barcode.barcode_number
                          }}</span>
                        </td>
                        <td>
                          <img
                          v-if="product.product_image.length>0"
                            :src="basePath+product.product_image[0].product_image"
                            class="table-image"
                            alt="product image"
                          />
                        </td>
                        <td>&#2547; {{ product.s_purchase_price }}</td>

                        <td>&#2547; {{ product.s_sale_price }}</td>

                        <td>
                          <span
                            v-if="product.stock <= 5"
                            class="badge badge-danger"
                            > {{ product.s_stock }}</span
                          >
                          <span v-else class="badge badge-success"> {{
                            product.s_stock
                          }}</span>
                        </td>

                        <td>
                            <button @click="putBackProduct(product.id,product.s_stock)" class="btn btn-sm btn-danger" v-if="product.s_stock > 0" > Put Back </button>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="products"
                        @pagination-change-page="productList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ products.from }}</strong> to
                        <strong>{{ products.to }}</strong> of total
                        <strong>{{ products.total }}</strong> entries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import navbar from "../Navbar";
import { jsPDF } from "jspdf";

export default {
  created() {
    this.productList();
  },
  data() {
    return {
      products: {},
      loading: true,
      basePath: this.$store.state.image_base_link ,
      search: "",
      item: "30",
      status: "all",
    };
  },
  methods: {
    putBackProduct($product_id,$stock_qty){
        Swal.fire({
        title: '<h4> How many item do you want to put back ? </h5>',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value > $stock_qty) {
           alert("put back item is greater than your product stock quantity");
           return ;
        }
        if (result.value <= $stock_qty) {
          axios
            .get("/api/put/back/showroom/product/head/office/"+$product_id + '/'+ result.value)
            .then((resp) => {
               console.log(resp)
               if (resp.data.status == "previous_pending") {
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "error",
                  duration: 8000,
                });
              }
              else if (resp.data.status == "OK") {
                this.$router.push({ name:'return_showroom_product'});
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });

    },
    productList(page = 1) {
      this.$Progress.start();
      axios
        .get("/api/showroom/products?page=" + page, {
          params: {
            status: this.status,
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.products;
          this.loading=false;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
          this.$Progress.finish();
        });
    },

    productSearch() {
      if (this.search.length > 3) {
        this.$Progress.start();
        this.loading = true;
        axios
          .get("/api/search/showroom/product/"+this.search)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.products = resp.data.products;
              this.loading = false;
              this.$Progress.finish();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.productList();
      }
    },



  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
.dropbtn {
  width: 100% !important;
  margin-bottom: 5px !important;
}
.dropbtn-active {
  display: block !important;
}
.dropdown-action {
  display: none;
  width: 90px;
  position: absolute;
}
</style>

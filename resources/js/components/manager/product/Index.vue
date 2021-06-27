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
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        placeholder="search with product code "
                        v-model="search"
                        @keyup="productSearch()"
                      />
                    </div>
                    <div class="col-lg-2">
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Barcode</th>
                        <th scope="col">P_code</th>
                        <th scope="col">Image</th>
                        <th width="5%" scope="col">Purchase price</th>
                        <th width="7%" scope="col">Sale price</th>
                        <th scope="col">Stock</th>

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
                        <td style="width: 100px">
                          <p
                            v-html="product.product_barcode.barcode"
                            class="barcode"
                          ></p>
                          <span class="barcode-number">{{
                            product.product_barcode.barcode_number
                          }}</span>
                        </td>
                        <td>{{ product.product_code }}</td>
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

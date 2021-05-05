<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'showroom_sale' }"
            class="btn btn-primary btn-sm"
          >
            <i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Sale</li>
        </ol>
      </section>
      <section class="content">
        <form @submit.prevent="searchProduct" id="searchProductform"></form>
        <form @submit.prevent="addSale" @keydown="form.onKeydown($event)">
          <div class="row justify-content-center">
            <div
              class="alert alert-danger alert-dismissible"
              v-if="errors.length"
              role="alert"
            >
              <ul>
                <div v-for="error in errors">
                  <li>{{ error }}</li>
                  <br />
                </div>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Customer information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label
                      >Mobile Number<span style="color: red">*</span>
                    </label>
                    <input
                      type="text"
                      name="customer_phone"
                      class="form-control"
                      autocomplete="off"
                      placeholder="01xxxxxxxxx"
                      maxlength="11"
                      v-model="form.customer_phone"
                      @keyup="searchCustomer"
                      :class="{
                        'is-invalid': form.errors.has('customer_phone'),
                      }"
                    />
                    <has-error :form="form" field="customer_phone"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Name <span style="color: red">*</span></label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      autocomplete="off"
                      placeholder="Name"
                      v-model="form.customer_name"
                      :class="{
                        'is-invalid': form.errors.has('customer_name'),
                      }"
                    />
                    <has-error :form="form" field="customer_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Address</label>
                    <textarea
                      name="address"
                      class="form-control"
                      autocomplete="off"
                      placeholder="address"
                      v-model="form.customer_address"
                      :class="{
                        'is-invalid': form.errors.has('customer_address'),
                      }"
                      rows="3"
                    >
                    </textarea>
                    <has-error
                      :form="form"
                      field="customer_address"
                    ></has-error>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">Product information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>Scan Barcode || prodcut code</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      autofocus
                      maxlength="4"
                      autocomplete="off"
                      placeholder="Enter Product Code"
                      form="searchProductform"
                      v-model="product_code"
                    />
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <table class="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Variant</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>total</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody v-if="products.length > 0">
                          <tr
                            v-for="(
                              product, index
                            ) in products"
                            :key="index"
                          >
                            <td>{{ index }}</td>
                            <td>
                              {{ product.name + "-" + product.product_code }}
                              <input type="hidden" :value="product.id" />
                            </td>

                            <td>
                              <select
                                class="form-control"
                                v-model="form.products[index].variant_id"
                                style="width: 70px"
                              >
                                <option value>select variant</option>
                                <option
                                  v-if="product.variants"
                                  v-for="(
                                    product_variant, index
                                  ) in product.variants"
                                  :key="index"
                                  :value="product_variant.variant.id"
                                >
                                  {{ product_variant.variant.name }}
                                </option>
                              </select>
                            </td>
                            <td>
                              <input
                                type="number"
                                v-model="form.products[index].quantity"
                                @keyup="quantity(index)"
                                @change="quantity(index)"
                                style="width: 40px"
                              />
                              <span class="badge badge-danger">{{
                                product.s_stock
                              }}</span>
                            </td>
                            <td>
                              <strong>{{ product.s_sale_price }}</strong>
                            </td>
                            <td>{{ form.products[index].total }}</td>
                            <td>
                              <a
                                class="btn btn-danger btn-sm"
                                @click="remove(index)"
                                ><i class="fa fa-trash"></i
                              ></a>
                            </td>
                          </tr>
                          <tr v-if="products.length > 0">
                            <td colspan="3">
                              <select name="sale_type"
                               class="form-control"
                               v-model="form.sale_type">
                                <option value="1">Retail Sale</option>
                                <option value="2">Whole Sale</option>
                              </select>
                            </td>
                            <td colspan="2">Total Amount</td>
                            <td colspan="2">{{ form.total }}</td>
                          </tr>
                          <tr v-if="products.length > 0">
                            <td colspan="3">
                               <select name="discount_type"
                               class="form-control"
                               v-model="form.discount_type">
                                <option disabled>discount type</option>
                                <option value="percentage">percentage</option>
                                <option value="flat">flat</option>
                              </select>
                            </td>
                            <td colspan="2" >Discount</td>
                            <td colspan="2" >
                              <input
                                class="form-control"
                                @keyup="totalCalculation"
                                v-model="form.discount"
                                placeholder="0"
                              />
                            </td>
                          </tr>
                          <tr v-if="products.length > 0">
                            <td colspan="3"></td>
                            <td colspan="2" >Paid</td>
                            <td colspan="2">
                              <input
                                v-model="form.paid"
                                @keyup="totalCalculation"
                                class="form-control"
                                placeholder="0"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colspan="3"></td>

                            <td colspan="2" >Paid By</td>
                            <td colspan="2">
                              <div class="form-group">
                                <select
                                  name="debit_from"
                                  id=""
                                  class="form-control"
                                  v-model="form.paid_by"
                                  :class="{
                                    'is-invalid': form.errors.has('paid_by'),
                                  }"
                                >
                                  <option value="Cash">Cash</option>
                                  <option value="Bkash(personal)">
                                    Bkash(personal)
                                  </option>
                                  <option value="Bkash(merchant)">
                                    Bkash(merchant)
                                  </option>
                                  <option value="Bank">Bank</option>
                                </select>
                                <has-error
                                  :form="form"
                                  field="paid_by"
                                ></has-error>
                              </div>
                            </td>
                          </tr>

                          <tr v-if="products.length > 0">
                            <td colspan="3"></td>
                            <td colspan="2" >Amoutn due</td>
                            <td colspan="2">{{ form.due }}</td>
                          </tr>

                          <button
                            class="btn btn-success"
                            style="margin-top: 12px"
                            type="submit"
                            :disabled="form.busy"
                          >
                            Submit
                          </button>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);
import navbar from "../Navbar";
Vue.component(HasError.name, HasError);

export default {
  created() {},
  data() {
    return {
      form: new Form({
        customer_phone: "",
        customer_name: "",
        customer_address: "",
        sale_type:1,
        products: [],
        status: 2,
        total: 0,
        discount: 0,
        discount_type:'discount type',
        due: 0,
        paid: 0,
        order_type: 2,
        paid_by: "Bkash(merchant)",
      }),
      search_product_code: "",
      attribute_id: "",
      variant_id: "",
      product_code: "",
      products: [],
      product_attributes: null,
      product_variants: null,
      product_quantity: 1,
      errors: [],
      product_per_page: 10,
      base_link: this.$store.state.image_base_link,
    };
  },

  //method initial for submit data
  methods: {
    addSale() {
      //start progress bar when submit fomr
      this.$Progress.start();
      this.form
        .post("/api/showroom/sale/add")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            //end progress bar when success resp
            this.$Progress.finish();
            this.$router.push({ name: "showroom_sale" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            //other wise success, show a error
          } else {
            this.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.errors = [];
          this.errors.push(error.response.data.errors);
          this.$Progress.finish();
        });
    },

    //method initial for search product
    searchProduct() {
      let length = this.product_code.length;
      if (length == 4) {
        this.$Progress.start();
        axios
          .get("/api/search/product/with/"+this.product_code)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.product_code = "";
              let product = {
                id: "",
                price: "",
                quantity: 1,
                attribute_id: "",
                variant_id: "",
                total: "",
                stock: "",
              };
              for (let i = 0; i < resp.data.product.length; i++) {
               // check the product stcok availity
                if (resp.data.product[i].s_stock <= 0) {
                  return Swal.fire({
                    type: "warning",
                    title: "Wopps....",
                    html: `${resp.data.product[i].name} - <strong> ${resp.data.product[i].product_code} </strong> in <b>stcok not available</b>.`,
                  });
                }

                this.products.push(resp.data.product[i]);
                product.id = resp.data.product[i].id;
                product.price = resp.data.product[i].s_sale_price;
                product.total = resp.data.product[i].s_sale_price;
                product.stock = resp.data.product[i].s_stock;
                //  console.log(resp.data.product)
              }
              this.form.products.push(product);
              this.totalCalculation();
            }
            //when not resp success
            else {
              this.$toasted.show(
                "Product not found with " + this.product_code,
                {
                  position: "top-center",
                  type: "danger",
                  duration: 2000,
                }
              );
            }
            this.$Progress.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$Progress.finish();
          });
      }
    },

    //method initial search customer
    searchCustomer() {
      if (this.form.customer_phone.length == 11) {
        axios
          .get("/api/search/customer/" + this.form.customer_phone)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "OK") {
              this.form.customer_name = resp.data.customer.name;
              this.form.customer_address = resp.data.customer.address;
              this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
              });
            } else {
              this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
              });
            }
          });
      }
    },

    //set product attribute
    attribute(index) {
      this.form.products[index].attribute_id = this.attribute_id;
    },
    //set product variant
    // variant(index) {
    //   this.form.products[index].variant_id = this.variant_id;
    // },
    //when chage qauntity
    quantity(index) {
      if(parseInt(this.products[index].s_stock ) < parseInt(this.form.products[index].quantity)){
        alert(`max quantity ${this.form.products[index].s_stock}`)
        this.form.products[index].quantity=this.form.products[index].stock;
        return;
      }
      this.form.products[index].total =
        parseInt(this.form.products[index].price) *
        parseInt(this.form.products[index].quantity);
        this.totalCalculation();
    },

    //total amount calculation
    totalCalculation() {
      let products = this.form.products;
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += parseInt(products[i].price) * parseInt(products[i].quantity);
      }


      if (
        parseInt(this.form.discount) >
        parseInt(total) + parseInt(this.form.discount)
      ) {
        Swal.fire({
          type: "warning",
          text: `why discount amount ${this.form.discount} bigger this total amount ${total} ?`,
        });
        this.form.discount = total;
        return;
      }
      this.form.total = parseInt(total);

      this.form.due =
        this.form.total -
        (parseInt(this.form.discount)+
        parseInt(this.form.paid));
        total += parseInt(products[i].price) * parseInt(products[i].quantity);
    },

    remove(index) {
      // console.log(index);
      console.log(this.form.products[index]);
      this.form.products.splice(index, 1);
      this.products.splice(index, 1);
      this.totalCalculation();
    },

  },

  components: {
    navbar,
  },
};
//Date picker
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.autocomplete {
  max-height: 120px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  z-index: 454;
}

.fa-search {
  height: 33px;
  width: 60px;
  margin-left: -25px;
}

.autocomplete li:hover {
  background: #222d32;
  color: #ffffff;
}
.suggest-product img {
  width: 120px;
  height: 120px;
}
.suggest-product {
  background: #ecf0f5;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 0px 1px 2px #ddd;
}
.add-item.text-center {
  background: #fff;
  width: block;
  padding: 6px 5px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 18px;
}
.form-group.product-search {
  width: 80%;
  left: 10%;
  position: relative;
}
</style>

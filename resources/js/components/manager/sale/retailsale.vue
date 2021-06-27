<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
       <h1>
          <router-link :to="{ name: 'showroom_sale_add' }" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>
          <router-link :to="{ name: 'showroom_sale' }" class="btn btn-sm btn-success"
            >Today</router-link
          >
          <router-link :to="{ name: 'showroom_retail_sale' }" class="btn btn-sm btn-success"
            >Retail Sale </router-link
          >
          <router-link :to="{ name: 'showroom_whole_sale' }" class="btn btn-sm btn-success"
            >Whole Sale </router-link
          >

          <router-link :to="{ name: 'showroom_sale' }" class="btn btn-sm btn-success active"
            >All</router-link
          >

        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">All sale</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row ">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-bsale">
                  <div class="row" style="margin-bottom: 3px">

                    <div class="col-lg-4 col-lg-offset-1 sales-heading">
                      <h3 class="box-title">{{ heading }}</h3>
                    </div>
                  </div>
                  <div class="row">

                    <div class="col-lg-2">
                      <select class="form-control" v-model="status" @change="salesList">
                        <option value="all">All</option>
                        <option value="1">New</option>
                        <option value="7">Retrun</option>
                        <option value="6">Cancel</option>
                      </select>
                    </div>
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        @keyup="salesearch"
                        v-model="search"
                        placeholder="Enter Invoice,Cutomer_phone"
                      />
                    </div>
                    <div class="col-lg-4">
                      <form @submit.prevent="filtersale">
                        <div class="row">
                          <div class="col-lg-6">
                            <date-picker
                              autocomplete="off"
                              v-model="start_date"
                              placeholder="start-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-6" style="margin-left: -20px">
                            <date-picker
                              autocomplete="off"
                              v-model="end_date"
                              placeholder="end-date"
                              :config="options"
                            ></date-picker>
                          </div>

                        </div>
                      </form>
                    </div>
                    <div class="col-lg-1">
                      <button
                        @click="resetAll"
                        style="margin-left: 45px"
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        <i class="fa fa-refresh"></i>
                      </button>
                    </div>

                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        v-if="start_date.length > 0"
                        @change="filtersale"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                      <select
                        class="form-control"
                        v-model="item"
                        v-else
                        @change="salesList"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>

                        <th scope="col">customer Name</th>
                        <th scope="col">C_phone</th>
                        <th scope="col">C_address</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Sale Type</th>
                        <th scope="col">Total</th>
                        <th>sale_date</th>

                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr v-else v-for="(sale, index) in sales.data" :key="index">

                        <td>
                          {{  sale.customer_name }}
                        </td>
                        <td >
                          {{ sale.customer_phone }}
                        </td>
                        <td >
                          {{ sale.customer_address ? sale.customer_address : "" }}
                        </td>
                        <td >{{ "S-"+sale.invoice_no }}</td>
                        <td>
                             <span v-if="sale.sale_type==1" class="badge badge-primary "> retail sale  </span>
                             <span v-else class="badge badge-success "> whole sale </span>
                           </td>
                        <td >
                           Total: <strong> {{ parseInt( sale.total)  }}  </strong>   <br>
                            Paid: <strong> {{ parseInt(sale.paid) }}  </strong>
                            Due:  <strong>  {{ parseInt(sale.due_amount) }} </strong>
                        </td>

                        <td >{{ sale.created_at }}</td>
                        <td >
                          <router-link class="btn " :to="{name:'showroom_sale_view',params:{id:sale.id}}"> <i class="fa fa-lg fa-eye"></i> </router-link>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="sales"
                        @pagination-change-page="salesList"
                        :limit="5"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ sales.from }}</strong> to
                        <strong>{{ sales.to }}</strong> of total
                        <strong>{{ sales.total }}</strong> entries
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
import { Form } from "vform";
import navbar from "../Navbar";

export default {
  components: { navbar },

  created() {
    this.salesList();

  },
  data() {
    return {
      sales: {},
      loading: true,
      item: "10",
      courier: {
        sale_id: "",
        courier_id: "",
        memo_no: "",
        sale_index: "",
      },
      couriers: "",
      comments: "",
      search: "",
      start_date: "",
      end_date: "",

      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      status: "all",
      type: "all",
      page: 1,
      selected: false,

      //for biblk action
      select_sale_id: [],
      bulk_status: "all",

      //heading in table
      heading: "All sale",

      bulkActionType: "0",

      //for filtaring sale
      courier_id: "",
    };
  },
  methods: {
    //get sale list
    salesList(page = 1) {
      //start progress bar
      this.$Progress.start();
      axios
        .get("/api/showroom/retailsales/list?page=" + page, {
          params: {
            //send data
            status: this.status,
            item: this.item,
            type: this.type,
            start_date: this.start_date,
            end_date: this.end_date,

          },
        })
        .then((resp) => {
          console.log(resp);
          this.$Progress.finish();
          //only success resp
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.loading = false;
            this.page = this.page + 1;
            this.loading = false;
          }

          //else show a error
          else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })

    },



    pending(sale, index) {
      /////index initial for update sale from saleLit or sale arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/pending/sale/" + sale.id)
        .then((resp) => {
          console.log(resp);
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.sales.data[index].status = 2;
          }
          //any kibd off error resp
          else {
            this.$Progress.finish();

            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

    //method initial for sale search
    salesearch(page = 1) {
      //if search lenght minimum 2
      if (this.search.length > 1) {
        //show loader
        this.loading = true;

        //fetch data
        axios
          .get("/sale/search/" + this.search + "?page=" + page)
          .then((resp) => {
            //if success resp
            if (resp.data.status == "SUCCESS") {
              this.sales = resp.data.sales;
              this.loading = false;
            }
          })
          //for any kind of error
          .catch((error) => {
            console.log(error);
            alert("some thing want wrong");
          });
      }
      //if search lenght smaller then 2, then excute saleist method .......
      else {
        this.loading = false;
        this.salesList();
      }
    },

    //method initial for filter sale, data to date, and single data......
    filtersale(page = 1) {
      //start progressbar
      this.$Progress.start();

      //show loader
      this.loading = true;

      //fetch data
      axios
        .get("/sale/filter?page=" + page, {
          //send data
          params: {
            start_date: this.start_date,
            end_date: this.end_date,
            item: this.item,
            status: this.status,
          },
        })
        .then((resp) => {
          //only success resp ........
          this.$Progress.finish();
          this.loading = false;
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //method initial for rest all data, or sale arrow
    resetAll() {
      location.reload();
    },

    //method inital for select all
    selectAll() {
      //first idnetify select true or false
      //we need a tooglee all select box

      //if select true we make selected false, or select true
      if (this.selected == true) {
        this.selected = false;
      } else {
        this.selected = true;
      }

      //elemnt find by the class name
      let checkBoxClass = document.getElementsByClassName("select-all");

      for (let i = 0; i < checkBoxClass.length; i++) {
        //if select active then element set attribute check==true
        //element set attribute check==false
        if (this.selected == true) {
          checkBoxClass[i].checked = true;
        } else {
          checkBoxClass[i].checked = false;
        }
      }

      //at last push sale id in selected_sale_id arrow....
      //and agin check selected true or false.....
      if (this.selected == true) {
        for (let i = 0; i < this.sales.data.length; i++) {
          this.select_sale_id.push(this.sales.data[i].id);
        }
      } else {
        this.select_sale_id = [];
      }
    },

    //method inital for a bulk action
    selectBulkAction() {
      if (this.select_sale_id.length <= 0) {
        Swal.fire({
          type: "warning",
          text: "Please select at least one row",
        });
        return;
      }
      let action_type = this.bulkActionType;
      if (action_type == "INVOICE PRINT") {
        window.open("/api/showroom/sale/invoice/print/"+this.select_sale_id,"_blank");
      }

      if(action_type=='EXPORT SELECT ITEM'){
       // alert('export select sale');
         window.open('/export/selected/item/'+this.select_sale_id,'_blank')
      }
    },

    labelPrint() {
      window.open("", "_self", "width=600,height=600");
    },


    exportsale(){


      if(!this.courier_id){
        alert('please select a specific courier');
        return;

      }

      if(!this.status){

        alert('Please select a status');
        return;

      }

     window.open('/sale/export/'+this.status+'/'+this.courier_id);

    }
  },

  watch: {
    status: function (value) {
      if (value == 1) {
        this.heading = "New sales";
      } else if (value == 2) {
        this.heading = "Pending sales";
      } else if (value == 3) {
        this.heading = "Approved sales";
      } else if (value == 4) {
        this.heading = "Shipment sales";
      } else if (value == 5) {
        this.heading = "Delivered sales";
      } else if (value == 7) {
        this.heading = "Return sales";
      } else if (value == 6) {
        this.heading = "Cancel sales";
      } else {
        this.heading = "All sales";
      }
    },

    start_date: function (value) {
      if (value.length > 1) {
        this.salesList();
      }
    },
    end_date: function (value) {
      if (value.length > 1) {
        this.salesList();
      }
    },
    bulkActionType: function (value) {
      this.selectBulkAction();
    },
    courier_id: function (value) {
      this.salesList();
    },
  },
};
</script>

<style>
.sales-heading {
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #000;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="login-box" v-if="!isLoading">
    <div class="login-logo">
      <a href="#"> <b></b> </a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Reset Password </p>

      <form @submit.prevent="sendCode">
        <div class="alert alert-danger" v-if="error">{{ error }}</div>

        <div class="form-group has-feedback">
           <label class="control-label" for="input-email">Mobile Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="01xxx-xxxxx"
                    class="form-control"
                    autocomplete="off"
                    maxlength="11"
                    :class="{ 'is-invalid': form.errors.has('phone') }"
                    v-model="form.phone"
                    autofocus />
                  <has-error :form="form" field="phone"></has-error>
        </div>
        <div class="form-group has-feedback">
               <button :disabled="form.busy || form.phone.length !=11" class="btn btn-block btn-primary" type="submit">
                  <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>Get Code
                </button>
        </div>

      </form>

    </div>
    <!-- /.login-box-body -->
  </div>
  <div class="loading" v-else>
    <h2>Loading............</h2>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError } from "vform";

Vue.component(HasError.name, HasError);
export default {
  created() {
    this.removeClass();

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  data() {
    return {
      form: new Form({
        phone: "",
      }),
      error: "",
      isLoading: true,
    };
  },

  methods: {
     sendCode() {
      this.form
        .post("/api/manager/password/reset/send/code")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 8000,
            });
            this.$router.push({name:'manager_code_verified',params:{phone:this.form.phone}})
          } else {
           this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 3000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },

    removeClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar");
      let footer = document.getElementsByClassName("main-footer");

      myBody.classList.remove("skin-blue");
      myBody.classList.add("login-page");

      if (sidebar.length > 0) {
        sidebar[0].classList.add("none");
      }
      if (footer.length > 0) {
        footer[0].classList.add("none");
      }
    },

    addClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar")[0];
      let footer = document.getElementsByClassName("main-footer")[0];
      myBody.classList.remove("login-page");
      myBody.classList.add("skin-blue");

      sidebar.classList.remove("none");
      footer.classList.remove("none");
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let sidebar = document.getElementsByClassName("main-sidebar")[0];
  let footer = document.getElementsByClassName("main-footer")[0];

    sidebar.classList.add("none");
    footer.classList.add("none");

});
</script>
<style >
.none {
  display: none !important;
}

.password_reset_button{

    color: #ee6a18;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
}
</style>

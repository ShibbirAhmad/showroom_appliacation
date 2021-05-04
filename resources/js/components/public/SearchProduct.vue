<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <nav-item> </nav-item>
    <div id="container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" style="margin-left:30px">
            <div class="row">
              <div class="col-lg-8">
                <input
                  class="form-control"
                  placeholder="Search Product"
                  v-model="search"
                  @keyup="searchProducts"
                />
              </div>
              <div class="col-lg-4">
                <button
                  type="button"
                  class="btn btn-success"
                  @click.prevent="searchProducts"
                >Search More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row product-content" style="margin-top:15px;">
          <div class="col-lg-3 col-md-3 col-xs-6 product_container_column " v-for="(product,index) in products" :key="index" v-if="products">
            <div class="product-thumb">
              <div class="image">
                <router-link :to="{ name: 'single', params: { slug: product.slug }}">
                  <img
                    :src="base_url+product.product_image[0].product_image"
                    :alt="product.name"
                    :title="product.name"
                    class="img-responsive"
                  />
                </router-link>
              </div>
              <div>
                <div class="caption">
                  <h4>
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug }}"
                    >{{product.name}}</router-link>
                  </h4>

                  <p class="price">
                    <span class="price-new">{{product.price}}</span>
                    <span class="price-old" v-if="product.discount">{{product.sale_price}}</span>
                    <!-- <span class="saving">-26%</span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 text-center" v-if="products.length < 1 ">
            <h3 class="alert alert-warning">No product Found</h3>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
export default {
  created() {
    this.searchProducts();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      products: "",
      search: this.$route.params.search,
      base_url:this.$store.state.image_base_link,
    };
  },

  methods: {
    searchProducts() {
      this.$Progress.start();
      axios
        .get("/_public/search/products/" + this.search)
        .then((resp) => {
          console.log(resp);
          this.products = resp.data;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

//show sub  menu in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(() => {
    //find the click element
    let sub_menu = document.getElementsByClassName("show-sub");

    for (let i = 0; i < sub_menu.length; i++) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        let show_sub_menu = sub_menu[i].parentElement.querySelector(
          ".left-sub-menu"
        );
        //set active class
        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    }
  }, 2000);
});
</script>
<style scoped>
.nav-active {
  display: block !important;
}

.nav_items{
  display:none ;
}

@media  screen and (max-width:768px) {
 .nav_items{
  display:block ;
 } 
 
 

}

</style>



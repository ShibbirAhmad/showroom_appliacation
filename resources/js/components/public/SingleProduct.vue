<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <frontend-header></frontend-header>
     <nav-item></nav-item>
    <div id="container">
      <div class="container">
         <div class="row">
            <div class="col-lg-5">
                <div>
              <div class="row product-info">
                <div class="col-lg-6 col-md-6 product-image-viewer" style="margin-bottom:20px;"  >
                  <ProductImage :images="product_images"></ProductImage>
                  <!-- <ProductZoomer :base-images="product_images" :base-zoomer-options="zoomerOptions" v-if="Object.keys(product_images).length" /> -->
                     <p> More Inforamtion About This Product, Just Call Now <a href="tel:01715900066">01715 900066</a></p>
                  </div>
           
              </div>
             </div>
            </div>
            <div class="col-lg-4">
               <ul class="list-unstyled description">
                  <li>
                 <h2 class="title" itemprop="name">{{ product.name }}</h2>

                  </li>
                    <li>
                      <h4>
                        <b>Product Code:</b>
                        <span itemprop="mpn">{{ product.product_code }}</span>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <b>Availability:</b>
                        <span class="instock" v-if="product.stock > 0"> <strong>({{product.stock }})</strong></span>
                        <span class="outstcok" v-else>Stock Out</span>
                      </h4>
                    </li>
                  </ul>
                  <ul class="price-box">
                    <li class="price">
                     <h3>
                     
                        <span class="price-old" v-if="product.discount">&#2547 {{product.sale_price}}</span>
                      <span class="price-new">&#2547 {{product.price}}</span>
                     </h3>
                    </li>
                  
                  </ul>
                  <div id="product">
                    <div class="row">
                      <div class="col-lg-6" v-if="product.product_variant.length>0 && product.product_attribute">
                          <div>
                      <!-- <h3 class="subtitle">Available Options</h3> -->
                      <div class="form-group required">
                        <h4 class="control-label">
                          <b>{{ product.product_attribute.attribute.name }}</b>
                        </h4>
                        <select
                          class="form-control"
                          v-model="variant_index"
                          @change="SelectVaraint"
                          name="option[200]"
                        >
                          <option value disabled>--- Please Select ---</option>
                          <option
                            value
                            v-for="(variant,v) in product.product_variant"
                            :key="v"
                            :value="v"
                          >{{variant.variant.name}}</option>
                        </select>
                      </div>
                    </div>
                      </div>
                       <div class="col-lg-6">
                        <div class>
                          <h4 class="control-label" for="input-quantity">
                            <b>Quantity</b>
                          </h4>
                          <input
                            type="number"
                            name="quantity"
                            v-model="cart.quantity"
                            size="2"
                            value="1"
                            class="form-control"
                            @change="validation"
                            @keyup="validation"
                          />

                          <div class="clear"></div>
                        </div>
                      </div>
                    </div>  
                    
                    <div class="row">
                     

                      <div class="col-lg-6">
                        <button
                          @click.prevent="CartToAdd"
                          type="button"
                          id="button-cart"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;"
                         
                         
                        >Add to Cart</button>
                      </div>

                         <div class="col-lg-6">
                        <button
                          @click.prevent="buyNow"
                          type="button"
                         
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;background:#000;"
                         
                         
                        >Buy Now</button>
                      </div>
                    </div>
                    
                  </div>
            </div>
         </div>
           <div class="product-details-tabe">
               <ul class="details-tab-menu-list">
                  <li class="details-tab-menu-item"  @click="tab_content=1" :class="{'tab-menu-item-active':tab_content==1}">Description</li>
                    <li class="details-tab-menu-item" @click="tab_content=2" :class="{'tab-menu-item-active':tab_content==2}" >How To Buy</li>
                      <li class="details-tab-menu-item"  @click="tab_content=3" :class="{'tab-menu-item-active':tab_content==3}">Return Policy</li>
                 </ul>
              <div class="product-tab-content">
                <div v-html="product.details" class="product-details" :class="{block:tab_content==1}"></div>
                <div class="how-to-buy" :class="{block:tab_content==2}">
                  <ul>
                    <li class="h-b-li">Select the number of products you want to buy</li>
                    <li class="h-b-li">Click <strong>Add To Cart</strong> Button</li>
                    <li class="h-b-li">Then go to the checkout page</li>
                    <li class="h-b-li">If you are a new user, please click on Sign Up.provide us your valid information.</li>
                    <li class="h-b-li">Complete your checkout, we received your order, and for order confirmation or customer service contact with you</li>
                  </ul>
                </div>
                 <div class="how-to-buy"  :class="{block:tab_content==3}">
                  <ul>
                    <li class="h-b-li">
                      If your product is damaged, defective, incorrect, or incomplete at the time of delivery, please file a return request on call to the customer care support number within 3 days of the delivery date                      </li>
                    <li class="h-b-li">Change of mind is not applicable as a Return Reason for this product</li>
                  
                  </ul>
                </div>

              </div>
              </div>
        <div class="row related_products product-content">
          <h3 class="sub-title">Related Products</h3>
          <div class="col-lg-3 col-md-3 col-xs-6 product_container_column " v-for="(related_product,index) in related_products" :key="index" >
            <div class="product-thumb">
              <div class="image">
                <router-link :to="{ name: 'single', params: { slug: related_product.slug }}">
                  <!-- <img
                    :src="'/../public//storage/'+related_product.product_image[0].product_image"
                    :alt="related_product.name"
                    :title="related_product.name"
                    class="img-responsive"
                  /> -->
                    <v-lazy-image
                        :src="base_url+related_product.product_image[0].product_image"
                        :alt="related_product.name"
                        :title="related_product.name"
                        class="img-responsive"
                        :src-placeholder="base_url+'images/static/d3.jpg'"
                  />
                </router-link>
              </div>
              <div>
                <div class="caption">
                  <h4>
                    <router-link
                      :to="{ name: 'single', params: { slug: related_product.slug }}"
                    >{{product.name}}</router-link>
                  </h4>

                  <p class="price">
                    <span class="price-new">{{related_product.price}}</span>
                    <span
                      class="price-old"
                      v-if="related_product.discount"
                    >{{related_product.sale_price}}</span>
                    <!-- <span class="saving">-26%</span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @infinite="getRelatedProducts">
            <div slot="no-more"></div>
          </infinite-loading>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import ProductImage from "./ProductImageView.vue";

export default {
  created() {
    this.validation();
    window.scrollTo(0, 0);
    this.productImage();

    //   console.log(this.$route.params.slug);
    setTimeout(() => {
      this.validation();
    }, 200);
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
      base_url: this.$store.state.image_base_link,

      related_products: [],
      page: 1,
      tab_content: 1,
    };
  },
  methods: {
    productImage() {
      axios.get("/_public/product/" + this.$route.params.slug).then((resp) => {
        this.cart.product_id = resp.data.product.id;
       // this.images.normal_size.push(...resp.data.product_images);
        // this.images.thumbs.push(...resp.data.product_images);
      });
    },
    CartToAdd() {
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("getCartContent");
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "error",
              duration: 20000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
    validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }
      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint() {
      let index = this.variant_index;
      let variant_id = this.product.product_variant[index].variant_id;
      let attribute_id = this.product.product_variant[index].variant
        .attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },

    getRelatedProducts($state) {
      axios
        .get("/_public/related/products/?page=" + this.page, {
          params: {
            product_slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.related_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buyNow() {
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
            this.$toasted.show(resp.data.message, {
              position: "bottom-left",
              type: "success",
              duration: 2000,
            });

            let user = this.user;
            console.log(user);
            if (user.mobile_no) {
              this.$router.push({ name: "Chekout" });
            } else {
              this.$router.push({ name: "UserLogin" });
            }
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
  },

  mounted() {
    this.getRelatedProducts();

    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("user");
  },

  computed: {
    product() {
      return this.$store.getters.single_product;
    },
    product_images() {
      return this.$store.getters.product_images;
    },

    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    Loading,
    ProductImage,
  },
  watch: {
    product_images: function (value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
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



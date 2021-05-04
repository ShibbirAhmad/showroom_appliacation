
<template>
    <div class="nav_items">
          <ul class="side-nav ">
              <li v-for="(category, index) in category" :key="index">
                    <img :src="base_url + category.icon_image"
                      v-if="category.icon_image"
                      class="category_icon_image"
                     />
                    <router-link
                      :to="{
                        name: 'PublcaCategory',
                        params: { slug: category.slug },
                      }"
                      class="nav-main-item"
                    >
                      {{ category.name }}</router-link
                    >
                    <i
                      class="fa fa-plus show-sub"
                      v-if="category.sub_category.length > 0"
                    ></i>
                    <ul
                      class="left-sub-menu"
                      v-if="category.sub_category.length > 0"
                    >
                      <li
                        v-for="(sub_category, i) in category.sub_category"
                        :key="i"
                      >
                        <router-link
                          :to="{
                            name: 'PublicSubCategory',
                            params: { slug: sub_category.slug },
                          }"
                          class="nav-main-item"
                          >{{ sub_category.name }}</router-link
                            >
                        <ul
                          class="last-sider-bar"
                          v-if="sub_category.sub_sub_category.length > 0"
                        >
                          <li
                            v-for="(sub_sub_category,
                            x) in sub_category.sub_sub_category"
                            :key="x"
                          >
                            <router-link
                              :to="{
                                name: 'PublicSubSUbCategory',
                                params: { slug: sub_sub_category.slug },
                              }"
                              class="nav-main-item"
                              >{{ sub_sub_category.name }}</router-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
              </ul>
      </div>

</template>


<script>
export default {
   
   mounted(){
    console.log("Hello nav-item");
     //for get category from vuex
     this.$store.dispatch("category");
         
    },
    methods: {
        
    },
    computed: {

     category() {
      return this.$store.getters.categories;
      },

    }

}
</script>
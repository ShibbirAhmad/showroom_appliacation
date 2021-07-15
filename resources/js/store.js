import Vue from 'vue'
import Vuex from 'vuex'

import router from './router.js' // Vue router instance

Vue.use(Vuex)


const state = {

   //initialize manager
    manager: {},


    user: {},

    single_product: {},

    image_base_url: '/../public/storage/',
    image_base_link: 'https://sufilifestyle.com/public/storage/',

    product_images: {},

    //general setting
    general_setting:"",

    //footer setting
    footer_setting:"",


}
const getters = {

    manager(state) {
        return state.manager;
    },
    user(state) {
        return state.user;
    },

    single_product(state) {
        return state.single_product;
    },
    image_base_link(state) {
        return state.image_base_link;
    },
     image_base_url(state) {
        return state.image_base_url;
    },
    product_images(state) {
        return state.product_images;
    },



    general_setting(state){
        return state.general_setting ;
    },

    footer_setting(state){
        return state.footer_setting ;
    },


}
const actions = {

    //get authenticat user
    user(context) {
        axios.get('/_public/userToCheck')
            .then(resp => {
                if (resp.data.status == 'AUTHORIZED') {
                    context.commit('user', resp.data.user);
                } else {
                    localStorage.removeItem('user_token')
                }
            })
    },

     // manager action in server
    manager(context) {
        axios.get('/api/manager/login/session/check')
            .then(resp => {
                //when session running
                if (resp.data.session == "running") {
                    context.commit('manager', resp.data.manager);
                }

                //when session expired
                if (resp.data.session == 'expired') {
                    localStorage.removeItem('manager_token');
                    router.push({ name: 'manager_login' });
                }



            })
    },



    //method initial for get single product from db
    single_product(context, payload) {
        axios.get("/_public/product/" + payload).then((resp) => {
           // console.log(resp);
            if (resp.data.status == "SUCCESS") {
                context.commit('single_product', resp.data.product)
            }
        });
    },

     //for get product images
     product_images(context, payload) {
        axios.get('/_public/product/images/' + payload)
            .then(resp => {
                console.log(resp.data);
                context.commit('product_images', resp.data)
            })
    },


       general_setting(context){
        axios.get("/_public/api/get/general/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('general_setting', resp.data.general_setting);
        })
    },

    footer_setting(context){
        axios.get("/_public/api/get/footer/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('footer_setting', resp.data.footer_setting) ;
        })
    },



}
const mutations = {

    manager(state, payload) {
        return state.manager = payload;
    },

    cartContent(state, cart) {
        state.cartContent.content = cart.cart_content;
        state.cartContent.total = cart.cart_total;
        state.cartContent.itemCount = cart.item_count;
    },


    single_product(state, payload) {
        return state.single_product = payload;
    },

    product_images(state, payload) {
        return state.product_images = payload;
    },



    general_setting(state,payload){
        return state.general_setting=payload ;
     },


     footer_setting(state,payload){
         return state.footer_setting=payload ;
      },




}

const store = new Vuex.Store({

    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions

})

global.store = store;

export default store

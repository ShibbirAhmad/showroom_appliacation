import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: () => import(/* webpackChunkName: "manager_login" */'./components/manager/Login.vue'),
        name: 'manager_login',
        props: true,
        meta: {
            title: "showroom"
        }
    },

    {
        path: '/manager/password/reset',
        component: () => import(/* webpackChunkName: "manager_password_reset" */'./components/manager/PasswordReset'),
        name: 'manager_password_reset',
        meta: {
            title: 'manager Password Reset'
        }
    },
    {
        path: '/manager/code/verify/:phone',
        component: () => import(/* webpackChunkName: "manager_code_verified" */'./components/manager/CodeVerified'),
        name: 'manager_code_verified',
        meta: {
            title: 'manager Password Reset'
        }
    },

    {
        path: '/manager/reset/new/password/:phone',
        component: () => import(/* webpackChunkName: "new_password_manager" */'./components/manager/NewPassword'),
        name: 'new_password_manager',
        meta: {
            title: 'Update manager Password'
        }

    },

    {
        path: '/showroom/home',
        component: () => import(/* webpackChunkName: "manager_dashboard" */'./components/manager/Dashboard'),
        name: 'manager_dashboard',
        meta: {
            authManager:true,
            title: 'Showroom Dashboard'
        }

    },

     {
        path: '/showroom/credit',
        component: () => import(/* webpackChunkName: "showroom_credit" */'./components/manager/credit/Index.vue'),
        name: 'showroom_credit',
        meta: {
             authManager:true,
            title: 'Crdit Manage'
        }
    },
     {
        path: '/showroom/credit/add',
        component: () => import(/* webpackChunkName: "showroom_credit_add" */'./components/manager/credit/Add.vue'),
        name: 'showroom_credit_add',
        meta: {
             authManager:true,
            title: 'Crdit Add'
        }
    },

     {
        path: '/showroom/credit/edit/:id',
        component: () => import(/* webpackChunkName: "showroom_credit_edit" */'./components/manager/credit/Edit.vue'),
        name: 'showroom_credit_edit',
        meta: {
             authManager:true,
            title: 'Crdit Edit'
        }
    },
    {
        path: '/showroom/due',
        component: () => import(/* webpackChunkName: "showroom_due" */'./components/manager/credit/Due.vue'),
        name: 'showroom_due',
        meta: {
             authManager:true,
            title: 'Crdit due'
        }
    },


     {
        path: '/showroom/debit',
        component: () => import(/* webpackChunkName: "showroom_debit" */'./components/manager/debit/Index.vue'),
        name: 'showroom_debit',
        meta: {
             authManager:true,
            title: 'debit '
        }
    },

     {
        path: '/showroom/debit/add',
        component: () => import(/* webpackChunkName: "showroom_debit_add" */'./components/manager/debit/Add.vue'),
        name: 'showroom_debit_add',
        meta: {
             authManager:true,
            title: 'debit Add'
        }
    },

    {
        path: '/showroom/debit/edit/:id',
        component: () => import(/* webpackChunkName: "showroom_debit_edit" */'./components/manager/debit/Edit.vue'),
        name: 'showroom_debit_edit',
        meta: {
             authManager:true,
            title: 'debit edit'
        }
    },




    {
        path: '/showroom/products',
        component: () => import(/* webpackChunkName: "showroom_products" */'./components/manager/product/Index.vue'),
        name: 'showroom_products',
        meta: {
             authManager:true,
            title: 'Product|Manage'
        }
    },

    {
        path: '/showroom/sale/add',
        component: () => import(/* webpackChunkName: "showroom_sale_add" */'./components/manager/sale/Add.vue'),
        name: 'showroom_sale_add',
        meta: {
            authManager: true,
            title: 'showroom sale'
        }
    },

     {
        path: '/showroom/sale',
        component: () => import(/* webpackChunkName: "showroom_sale" */'./components/manager/sale/Index.vue'),
        name: 'showroom_sale',
         meta: {
            authManager: true,
            title: 'showroom sale Info'
        }
    },

    {
        path: '/showroom/whole-sale',
        component: () => import(/* webpackChunkName: "showroom_whole_sale" */'./components/manager/sale/wholesale.vue'),
        name: 'showroom_whole_sale',
         meta: {
            authManager: true,
            title: 'showroom whole sale Info'
        }
    },


      {
        path: '/showroom/retail-sale',
        component: () => import(/* webpackChunkName: "showroom_retail_sale" */'./components/manager/sale/retailsale.vue'),
        name: 'showroom_retail_sale',
         meta: {
            authManager: true,
            title: 'showroom whole sale Info'
        }
      },



    {
        path: '/showroom/sale/view/:id',
        component: () => import(/* webpackChunkName: "showroom_sale_view" */'./components/manager/sale/View.vue'),
        name: 'showroom_sale_view',
        meta: {
            authManager: true,
            title: 'sale details info '
        }

    },
    {
        path: '/manager/profile',
        component: () => import(/* webpackChunkName: "manager_profile" */'./components/manager/profile/Profile'),
        name: 'manager_profile',
        meta: {
            title: ' Profile info '
        }
    },

    {
        path: '/manager/profile/edit',
        component: () => import(/* webpackChunkName: "manager_profile_edit" */'./components/manager/profile/Change_profile'),
        name: 'manager_profile_edit',
        meta: {
            title: ' Profile info | Edit '
        }

    },

    {
        path: '/manager/security/edit',
        component: () => import(/* webpackChunkName: "manager_password_edit" */'./components/manager/profile/Change_password.vue'),
        name: 'manager_password_edit',
        meta: {
            title: ' Password | Edit '
        }

    },

     {
        path: '/product/transaction',
        name: 'product_transaction',
        component: () => import(/* webpackChunkName: "product_transaction" */'./components/manager/product_transaction/Index.vue'),
        meta: {
            authManager:true,
            title : 'showroom product transaction'
        }
    },

     {
        path: '/product/pick/back/',
        name: 'return_showroom_product',
        component: () => import(/* webpackChunkName: "return_showroom_product" */'./components/manager/product_transaction/Return.vue'),
        meta: {
            authManager:true,
            title : 'return transaction'
        }
      },


     {
        path: '/product/transaction/details/:id',
        name: 'product_transaction_details',
        component: () => import(/* webpackChunkName: "product_transaction_details" */'./components/manager/product_transaction/Details.vue'),
        meta: {
           authManager: true,
            title : 'showroom product transaction details'
        }
    },



]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.authManager)) {
        if (localStorage.getItem('manager_token')) {
            next()
            return
        }
        next('/')
    }
    else {
        next()
    }



})

export default router

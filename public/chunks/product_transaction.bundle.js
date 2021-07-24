(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{10:function(t,a,s){"use strict";var e={created:function(){this.$store.dispatch("manager")},data:function(){return{manager:{},base_url:this.$store.state.image_base_url}},methods:{logout:function(){var t=this;axios.get("/api/manager/logout").then((function(a){console.log(a),"OK"==a.data.status&&(localStorage.removeItem("manager_token"),t.$store.commit("manager",null),t.$router.push({name:"manager_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getManager:function(){return this.$store.getters.manager}}},n=s(5),r=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("header",{staticClass:"main-header"},[t._m(0),t._v(" "),s("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),s("div",{staticClass:"navbar-custom-menu"},[s("ul",{staticClass:"nav navbar-nav"},[s("li",{staticClass:"dropdown user user-menu"},[s("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[s("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getManager.image}}),t._v(" "),s("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getManager.name))])]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",{staticClass:"user-header"},[s("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getManager.image,alt:"User Image"}}),t._v(" "),s("p",[t._v("\n                "+t._s(t.getManager.name)+" - manager\n                "),s("small",[t._v("Member since "+t._s(t.getManager.created_at))])])]),t._v(" "),s("li",{staticClass:"user-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"manager_profile"}}},[t._v(" profile ")])],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"manager_password_edit"}}},[t._v("change password")])],1),t._v(" "),s("div",{staticClass:"col-md-3"},[s("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"#"}},[a("span",{staticClass:"logo-mini"},[a("b",[this._v("A")]),this._v("LT")]),this._v(" "),a("span",{staticClass:"logo-lg"},[a("b",[this._v("Outlet")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);a.a=r.exports},663:function(t,a,s){"use strict";s.r(a);var e=s(12),n=s.n(e),r=s(4),i=s(10);n.a.component(r.HasError.name,r.HasError);var o={created:function(){this.transactionsList()},data:function(){return{transactions:{},loading:!0,showrooms:""}},methods:{transactionsList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/product/transaction/list?page="+a).then((function(a){console.log(a),"OK"==a.data.status&&(t.transactions=a.data.transactions,t.loading=!1)}))}},components:{navbar:i.a}},c=s(5),l=Object(c.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("navbar"),t._v(" "),s("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),s("br"),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11 col-md-11"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-bordered table-hover table-striped text-center "},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.transactions.data,(function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.invoice_no))]),t._v(" "),s("td",[t._v(" ৳ "+t._s(a.total)+" ")]),t._v(" "),s("td",[0==a.status?s("span",{staticClass:"badge badge-warning"},[t._v(" Pending ")]):s("span",{staticClass:"badge badge-success"},[t._v(" Recieved ")])]),t._v(" "),s("td",[t._v(t._s(a.comment?a.comment:"no comment"))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"product_transaction_details",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-eye"})])],1)])}))],2)])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"content-header"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("product transfer")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Product Trasformatin Tables")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Total Amount ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Comment")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Details")])])])}],!1,null,"b739c2ca",null);a.default=l.exports}}]);
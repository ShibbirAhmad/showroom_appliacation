(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{10:function(t,s,e){"use strict";var a={created:function(){this.$store.dispatch("manager")},data:function(){return{manager:{},base_url:this.$store.state.image_base_url}},methods:{logout:function(){var t=this;axios.get("/api/manager/logout").then((function(s){console.log(s),"OK"==s.data.status&&(localStorage.removeItem("manager_token"),t.$store.commit("manager",null),t.$router.push({name:"manager_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getManager:function(){return this.$store.getters.manager}}},i=e(5),o=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header",{staticClass:"main-header"},[t._m(0),t._v(" "),e("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),e("div",{staticClass:"navbar-custom-menu"},[e("ul",{staticClass:"nav navbar-nav"},[e("li",{staticClass:"dropdown user user-menu"},[e("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[e("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getManager.image}}),t._v(" "),e("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getManager.name))])]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",{staticClass:"user-header"},[e("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getManager.image,alt:"User Image"}}),t._v(" "),e("p",[t._v("\n                "+t._s(t.getManager.name)+" - manager\n                "),e("small",[t._v("Member since "+t._s(t.getManager.created_at))])])]),t._v(" "),e("li",{staticClass:"user-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"manager_profile"}}},[t._v(" profile ")])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"manager_password_edit"}}},[t._v("change password")])],1),t._v(" "),e("div",{staticClass:"col-md-3"},[e("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"logo",attrs:{href:"#"}},[s("span",{staticClass:"logo-mini"},[s("b",[this._v("A")]),this._v("LT")]),this._v(" "),s("span",{staticClass:"logo-lg"},[s("b",[this._v("Outlet")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);s.a=o.exports},101:function(t,s,e){var a=e(392);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(16)(a,i);a.locals&&(t.exports=a.locals)},391:function(t,s,e){"use strict";var a=e(101);e.n(a).a},392:function(t,s,e){(t.exports=e(15)(!1)).push([t.i,"\n.sales-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-bottom: 2px solid #000;\r\n  margin-bottom: 10px;\n}\r\n",""])},658:function(t,s,e){"use strict";e.r(s);e(4);var a={components:{navbar:e(10).a},created:function(){this.salesList()},data:function(){return{sales:{},loading:!0,item:"10",courier:{sale_id:"",courier_id:"",memo_no:"",sale_index:""},couriers:"",comments:"",search:"",start_date:"",end_date:"",options:{format:"YYYY-MM-DD",useCurrent:!1},status:"all",type:"all",page:1,selected:!1,select_sale_id:[],bulk_status:"all",heading:"All sale",bulkActionType:"0",courier_id:""}},methods:{salesList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/api/showroom/retailsales/list?page="+s,{params:{status:this.status,item:this.item,type:this.type,start_date:this.start_date,end_date:this.end_date}}).then((function(s){console.log(s),t.$Progress.finish(),"SUCCESS"==s.data.status?(t.sales=s.data.sales,t.loading=!1,t.page=t.page+1,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))},pending:function(t,s){var e=this;this.$Progress.start(),axios.get("/pending/sale/"+t.id).then((function(t){console.log(t),e.$Progress.finish(),"SUCCESS"==t.data.status?(e.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),e.sales.data[s].status=2):(e.$Progress.finish(),e.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),e.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},salesearch:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.length>1?(this.loading=!0,axios.get("/sale/search/"+this.search+"?page="+s).then((function(s){"SUCCESS"==s.data.status&&(t.sales=s.data.sales,t.loading=!1)})).catch((function(t){console.log(t),alert("some thing want wrong")}))):(this.loading=!1,this.salesList())},filtersale:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.loading=!0,axios.get("/sale/filter?page="+s,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item,status:this.status}}).then((function(s){t.$Progress.finish(),t.loading=!1,"SUCCESS"==s.data.status&&(t.sales=s.data.sales,t.loading=!1)})).catch((function(t){console.log(t)}))},resetAll:function(){location.reload()},selectAll:function(){1==this.selected?this.selected=!1:this.selected=!0;for(var t=document.getElementsByClassName("select-all"),s=0;s<t.length;s++)1==this.selected?t[s].checked=!0:t[s].checked=!1;if(1==this.selected)for(var e=0;e<this.sales.data.length;e++)this.select_sale_id.push(this.sales.data[e].id);else this.select_sale_id=[]},selectBulkAction:function(){if(this.select_sale_id.length<=0)Swal.fire({type:"warning",text:"Please select at least one row"});else{var t=this.bulkActionType;"INVOICE PRINT"==t&&window.open("/api/showroom/sale/invoice/print/"+this.select_sale_id,"_blank"),"EXPORT SELECT ITEM"==t&&window.open("/export/selected/item/"+this.select_sale_id,"_blank")}},labelPrint:function(){window.open("","_self","width=600,height=600")},exportsale:function(){this.courier_id?this.status?window.open("/sale/export/"+this.status+"/"+this.courier_id):alert("Please select a status"):alert("please select a specific courier")}},watch:{status:function(t){this.heading=1==t?"New sales":2==t?"Pending sales":3==t?"Approved sales":4==t?"Shipment sales":5==t?"Delivered sales":7==t?"Return sales":6==t?"Cancel sales":"All sales"},start_date:function(t){t.length>1&&this.salesList()},end_date:function(t){t.length>1&&this.salesList()},bulkActionType:function(t){this.selectBulkAction()},courier_id:function(t){this.salesList()}}},i=(e(391),e(5)),o=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"showroom_sale_add"}}},[e("i",{staticClass:"fa fa-plus"})]),t._v(" "),e("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"showroom_sale"}}},[t._v("Today")]),t._v(" "),e("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"showroom_retail_sale"}}},[t._v("Retail Sale ")]),t._v(" "),e("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"showroom_whole_sale"}}},[t._v("Whole Sale ")]),t._v(" "),e("router-link",{staticClass:"btn btn-sm btn-success active",attrs:{to:{name:"showroom_sale"}}},[t._v("All")])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-lg-11 col-md-11"},[e("div",{staticClass:"box box-primary"},[e("div",{staticClass:"box-header with-bsale"},[e("div",{staticClass:"row",staticStyle:{"margin-bottom":"3px"}},[e("div",{staticClass:"col-lg-4 col-lg-offset-1 sales-heading"},[e("h3",{staticClass:"box-title"},[t._v(t._s(t.heading))])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=s.target.multiple?e:e[0]},t.salesList]}},[e("option",{attrs:{value:"all"}},[t._v("All")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),e("option",{attrs:{value:"7"}},[t._v("Retrun")]),t._v(" "),e("option",{attrs:{value:"6"}},[t._v("Cancel")])])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Invoice,Cutomer_phone"},domProps:{value:t.search},on:{keyup:t.salesearch,input:function(s){s.target.composing||(t.search=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.filtersale(s)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("date-picker",{attrs:{autocomplete:"off",placeholder:"start-date",config:t.options},model:{value:t.start_date,callback:function(s){t.start_date=s},expression:"start_date"}})],1),t._v(" "),e("div",{staticClass:"col-lg-6",staticStyle:{"margin-left":"-20px"}},[e("date-picker",{attrs:{autocomplete:"off",placeholder:"end-date",config:t.options},model:{value:t.end_date,callback:function(s){t.end_date=s},expression:"end_date"}})],1)])])]),t._v(" "),e("div",{staticClass:"col-lg-1"},[e("button",{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-left":"45px"},attrs:{type:"button"},on:{click:t.resetAll}},[e("i",{staticClass:"fa fa-refresh"})])]),t._v(" "),e("div",{staticClass:"col-lg-2"},[t.start_date.length>0?e("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=s.target.multiple?e:e[0]},t.filtersale]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),e("option",{attrs:{value:"30"}},[t._v("30")])]):e("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=s.target.multiple?e:e[0]},t.salesList]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),e("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-striped table-hover table-bordered"},[t._m(1),t._v(" "),e("tbody",[t.loading?e("h1",[e("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.sales.data,(function(s,a){return e("tr",{key:a},[e("td",[t._v("\n                        "+t._s(s.customer_name)+"\n                      ")]),t._v(" "),e("td",[t._v("\n                        "+t._s(s.customer_phone)+"\n                      ")]),t._v(" "),e("td",[t._v("\n                        "+t._s(s.customer_address?s.customer_address:"")+"\n                      ")]),t._v(" "),e("td",[t._v(t._s("S-"+s.invoice_no))]),t._v(" "),e("td",[1==s.sale_type?e("span",{staticClass:"badge badge-primary "},[t._v(" retail sale  ")]):e("span",{staticClass:"badge badge-success "},[t._v(" whole sale ")])]),t._v(" "),e("td",[t._v("\n                         Total: "),e("strong",[t._v(" "+t._s(parseInt(s.total))+"  ")]),t._v(" "),e("br"),t._v("\n                          Paid: "),e("strong",[t._v(" "+t._s(parseInt(s.paid))+"  ")]),t._v("\n                          Due:  "),e("strong",[t._v("  "+t._s(parseInt(s.due_amount))+" ")])]),t._v(" "),e("td",[t._v(t._s(s.created_at))]),t._v(" "),e("td",[e("router-link",{staticClass:"btn ",attrs:{to:{name:"showroom_sale_view",params:{id:s.id}}}},[e("i",{staticClass:"fa fa-lg fa-eye"})])],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"box-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("pagination",{attrs:{data:t.sales,limit:5},on:{"pagination-change-page":t.salesList}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[e("p",[t._v("\n                      Showing\n                      "),e("strong",[t._v(t._s(t.sales.from))]),t._v(" to\n                      "),e("strong",[t._v(t._s(t.sales.to))]),t._v(" of total\n                      "),e("strong",[t._v(t._s(t.sales.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("All sale")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("customer Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("C_phone")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("C_address")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Sale Type")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),e("th",[t._v("sale_date")]),t._v(" "),e("th",[t._v("Action")])])])}],!1,null,null,null);s.default=o.exports}}]);
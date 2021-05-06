
 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->


      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview">
          <router-link :to="{name:'manager_dashboard'}">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </router-link>
        </li>

      <li class="treeview">
          <a href="#">
            <i class="fa fa-fire"></i> <span>Sales</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>   <router-link :to="{ name : 'showroom_sale_add'}"><i class="fa fa-plus "></i> Add </router-link></li>

        <li>
          <router-link  :to="{ name: 'showroom_sale'}"  > <i class="fa fa-eye"></i>Sale</router-link>
        </li>

          </ul>
        </li>

          <li class="treeview">
                    <a href="#">
                        <i class="fa fa-money"></i> <span>Accounts</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                            <li>
                                <router-link :to="{ name: 'showroom_credit'}"><i class="fa fa-eye"></i> Credit</router-link>
                            </li>

                            <li>
                                <router-link :to="{ name: 'showroom_debit'}"><i class="fa fa-eye"></i>Debit</router-link>
                            </li>

                            <li>
                                <router-link :to="{ name: 'showroom_due'}"><i class="fa fa-eye"></i>Due</router-link>
                            </li>


                    </ul>
                </li>

        <li class="treeview">
             <router-link :to="{ name : 'showroom_products'}"><i class="fa fa-list "> </i> Products </router-link>
        </li>

        <li class="treeview">
         <router-link :to="{ name : 'product_transaction'}"> <i class="fa fa-exchange"></i> Products Transaction </router-link>
        </li>


        <li class="treeview">
          <a href="#">
            <i class="fa fa-cogs"></i> <span>Setting</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li> <router-link  :to="{ name: 'manager_profile'}"  > <i class="fa fa-eye"></i> profile</router-link></li>
            <li> <router-link  :to="{ name: 'manager_profile_edit' }"  > <i class="fa fa-edit"></i>edit profile info</router-link></li>
            <li> <router-link  :to="{ name: 'manager_password_edit'}"  > <i class="fa fa-cogs"></i> change password</router-link></li>

          </ul>
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
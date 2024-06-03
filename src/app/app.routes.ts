import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewsComponent } from './pages/news/news.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { authGuard } from './guardians/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MasVendidosComponent } from './pages/mas-vendidos/mas-vendidos.component';
import { PortatilCategoryComponent } from './pages/portatil-category/portatil-category.component';
import { PcCategoryComponent } from './pages/pc-category/pc-category.component';
import { MonitorCategoryComponent } from './pages/monitor-category/monitor-category.component';
import { CascosCategoryComponent } from './pages/cascos-category/cascos-category.component';
import { RatonCategoryComponent } from './pages/raton-category/raton-category.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriesProductsComponent } from './pages/categories-products/categories-products.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { authReverseGuard } from './guardians/authReverse.guard';
import { OrderDetailComponent } from './pages/orders/order-detail/order-detail.component';
import { AdminLandingComponent } from './admin/components/landing/adminLanding.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './admin/dashboard/pages/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/dashboard/pages/admin-users/admin-users.component';
import { AdminEditProductsComponent } from './admin/dashboard/pages/admin-products/admin-edit-products/admin-edit-products.component';
import { AdminCreateProductsComponent } from './admin/dashboard/pages/admin-products/admin-create-products/admin-create-products.component';
import { AdminEditUsersComponent } from './admin/dashboard/pages/admin-users/admin-edit-users/admin-edit-users.component';
import { AdminCreateUsersComponent } from './admin/dashboard/pages/admin-users/admin-create-users/admin-create-users.component';
import { CreateImageComponent } from './admin/dashboard/pages/admin-products/create-image/create-image.component';
import { isAdminGuard } from './guardians/is-admin.guard';
import { notAdminGuard } from './guardians/not-admin.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [authReverseGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authReverseGuard],
  },
  { path: 'product/:id', component: ProductComponent, canActivate: [notAdminGuard] },
  { path: 'categories/:categoryId', component: CategoriesProductsComponent, canActivate: [notAdminGuard] },
  { path: 'mas-vendidos', component: MasVendidosComponent, canActivate: [notAdminGuard] },
  { path: 'portatil', component: PortatilCategoryComponent, canActivate: [notAdminGuard] },
  { path: 'pc', component: PcCategoryComponent, canActivate: [notAdminGuard] },
  { path: 'monitor', component: MonitorCategoryComponent, canActivate: [notAdminGuard] },
  { path: 'cascos', component: CascosCategoryComponent, canActivate: [notAdminGuard] },
  { path: 'raton', component: RatonCategoryComponent, canActivate: [notAdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
    canActivate: [authGuard, notAdminGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[isAdminGuard, authGuard],
    children: [
      { path: '', component: AdminLandingComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'products/image/:productId', component: CreateImageComponent },
      { path: 'products/create', component: AdminCreateProductsComponent },
      { path: 'products/:productId', component: AdminEditProductsComponent },
      { path: 'users/create', component: AdminCreateUsersComponent },
      { path: 'users/:userId', component: AdminEditUsersComponent },
    ],
    data: { showHeaderFooter: false },
  },
  { path: 'news', component: NewsComponent, canActivate: [notAdminGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate: [notAdminGuard] },
  { path: 'my-orders', component: OrdersComponent, canActivate: [authGuard, notAdminGuard] },
  {
    path: 'my-orders/:id',
    component: OrderDetailComponent,
    canActivate: [authGuard, notAdminGuard],
  },
  {
    path: 'pay/pay/success',
    component: PaymentComponent,
    canActivate: [authGuard, notAdminGuard],
  },
  {
    path: 'pay/pay/cancel',
    component: LoginComponent,
    canActivate: [authReverseGuard, notAdminGuard],
  },
  { path: '', component: LandingComponent, pathMatch: 'full', canActivate: [notAdminGuard] },
  { path: '**', component: NotFoundComponent },
];

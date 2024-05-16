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

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'mas-vendidos', component: MasVendidosComponent },
  { path: 'portatil', component: PortatilCategoryComponent },
  { path: 'pc', component: PcCategoryComponent },
  { path: 'monitor', component: MonitorCategoryComponent },
  { path: 'cascos', component: CascosCategoryComponent },
  { path: 'raton', component: RatonCategoryComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard] },
  { path: 'news', component: NewsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'my-orders', component: OrdersComponent, canActivate:[authGuard] },
  { path: 'pay/pay/success', component: PaymentComponent, canActivate:[authGuard] },
  { path: 'pay/pay/cancel', component: LoginComponent, canActivate:[authGuard] },
  { path: '**', component: NotFoundComponent }


];

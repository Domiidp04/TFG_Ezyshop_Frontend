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

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'mas-vendidos', component: MasVendidosComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard] },
  { path: 'news', component: NewsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'my-orders', component: OrdersComponent, canActivate:[authGuard] },
  { path: 'pay/pay/success', component: PaymentComponent, canActivate:[authGuard] },
  { path: 'pay/pay/cancel', component: LoginComponent, canActivate:[authGuard] },
  { path: '**', component: NotFoundComponent }


];

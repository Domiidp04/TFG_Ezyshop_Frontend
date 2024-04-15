import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: '**', component: NotFoundComponent }


];

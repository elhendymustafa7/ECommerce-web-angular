import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';
import { CartComponent } from './carts/Components/cart/cart.component';
import { AllComponent } from './products/Components/all/all.component';

const routes: Routes = [

  {path:"details", component: ProductsDetailsComponent},
  {path:"Carts", component: CartComponent},
  {path:"all",component:AllComponent},
  {path:"**",component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

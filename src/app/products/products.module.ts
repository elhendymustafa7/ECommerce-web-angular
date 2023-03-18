import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { AllComponent } from './Components/all/all.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';



@NgModule({
  declarations: [
    ProductsDetailsComponent,
    AllComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    ProductsDetailsComponent,
    AllComponent
  ]
})
export class ProductsModule { }

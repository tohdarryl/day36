import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductInfoComponent } from './components/product-info.component';
import { ProductSpecComponent } from './components/product-spec.component';
import { ProductComponent } from './components/product.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'product', component: ProductComponent,
    children: [
      {path: 'details', component: ProductDetailComponent,
        children: [
          {path: 'info', component: ProductInfoComponent},
          {path: 'specs', component: ProductSpecComponent},
          {path: '**', redirectTo: 'details', pathMatch: 'full'}
        ]}
  ]},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

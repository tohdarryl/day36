import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductInfoComponent } from './components/product-info.component';
import { ProductSpecComponent } from './components/product-spec.component';
import { ProductComponent } from './components/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductInfoComponent,
    ProductSpecComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

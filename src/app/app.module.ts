import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

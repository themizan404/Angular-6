<<<<<<< HEAD
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
=======
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
// import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFireModule } from 'angularfire2';
>>>>>>> 98136ca3fc337c525d96e576dc9028724ba7b796

import { AppRoutingModule }
  from './app-routing.module';
import { AppComponent } from './app.component';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { ProductFormComponent } from './admin/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BgNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
=======
    // AngularFireModule.initialApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
>>>>>>> 98136ca3fc337c525d96e576dc9028724ba7b796

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

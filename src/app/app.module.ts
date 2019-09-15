import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductComponent } from './product/product.component';
import { PageProductComponent } from './page-product/page-product.component';
import { ProductOptionsComponent } from './product-options/product-options.component';
import { SearchComponent } from './search/search.component';
import { PageSearchResultsComponent } from './page-search-results/page-search-results.component';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductComponent,
    PageProductComponent,
    ProductOptionsComponent,
    SearchComponent,
    PageSearchResultsComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

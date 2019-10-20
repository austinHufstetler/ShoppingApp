import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSearchResultsComponent } from './page-search-results/page-search-results.component';
import { PageProductComponent } from './page-product/page-product.component';
import { PageHomeComponent } from './page-home/page-home.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent},
  { path: 'search', component: PageSearchResultsComponent },
  { path: 'product/:id', component: PageProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

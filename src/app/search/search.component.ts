import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ProductService } from '../product/product.service';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(private productService: ProductService, private elementRef:ElementRef, private router:Router) { }

  ngOnInit() {
  }
 
  goToSearchResults(searchTerm) {     
      this.router.navigate(['/search'], { queryParams: { searchTerm: searchTerm } }); 
  }

  @HostListener("keyup", ['$event.target.id']) onkeyup(id: string){
    if(id !== 'card-search'){ return }
    this.productService.changeCard(this.searchTerm);
  }

  ngAfterViewInit() {
    /*
    this.elementRef.nativeElement.querySelector('#card-search')
        .addEventListener('keyup', this.onKeyUpAlt.bind(this)); */
  }

  /*
  onKeyUpAlt() {
    this.productService.changeCard(this.value);
  }
  */

}

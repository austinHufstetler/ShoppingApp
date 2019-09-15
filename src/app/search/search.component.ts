import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';
  constructor(private productService: ProductService, private elementRef:ElementRef) { }

  ngOnInit() {
  }


  @HostListener("keyup", ['$event.target.id']) onkeyup(id: string){
    if(id !== 'card-search'){ return }
    this.productService.changeCard(this.value);
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

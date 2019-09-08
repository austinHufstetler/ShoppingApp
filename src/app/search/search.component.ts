import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'Clear me';
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  @HostListener('keyup', ['$event.target.id']) onkeyup(id: string){
    if(id !== 'card-search'){ return }
    this.productService.changeCard(this.value);
  }

}

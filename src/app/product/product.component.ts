import { Component, OnInit } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';
import { Card } from '../interfaces/card';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  joey = faImages;
  card: any;

  constructor(private productService: ProductService, private searchService: SearchService) { }


  getCard(searchTerm): void {
    this.searchService.getCard(searchTerm).subscribe({
      next: data => this.card = data.card,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  ngOnInit() {
    this.productService.change.subscribe(searchTerm => {
      this.getCard(searchTerm);
    })
  }

}

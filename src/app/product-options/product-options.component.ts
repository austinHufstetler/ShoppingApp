import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss']
})
export class ProductOptionsComponent implements OnInit {
  quantities: [] = [...Array(31).keys()];

  constructor() {
    /* DON"T USE THIS JUST FOR REFERENCE
    if(this.card.rarity === 'Common'){
      this.price = 1.00;
      this._price = this.price.toFixed(2);
    }
    */
  }

  ngOnInit() {
  }

  /* TRASH
  price: number;
  _price: string;

 */



}

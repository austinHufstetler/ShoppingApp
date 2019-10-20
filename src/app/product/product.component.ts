import { Component, OnInit, Input } from '@angular/core';
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
  @Input() card: Card

  constructor() { }

  ngOnInit() {
  }

}

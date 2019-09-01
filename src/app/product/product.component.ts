import { Component, OnInit } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { CardService } from '../card.service';
import { Card } from '../models/card';
import { Pikachu } from '../pikachu';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  joey = faImages;
  card: Card;

  constructor(private cardService: CardService) { }

  getCard(): void {
    this.card = this.cardService.getCard();
  }

  ngOnInit() {
    this.getCard();
  }

}

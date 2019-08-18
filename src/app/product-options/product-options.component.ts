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

  card =  {
    "id": "base6-86",
    "name": "Pikachu",
    "nationalPokedexNumber": 25,
    "imageUrl": "https://images.pokemontcg.io/base6/86.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base6/86_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "86",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Legendary Collection",
    "setCode": "base6",
    "attacks": [
      {
        "cost": [
          "Lightning",
          "Lightning"
        ],
        "name": "Spark",
        "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        "damage": "20",
        "convertedEnergyCost": 2
      }
    ],
    "weaknesses": [
      {
        "type": "Fighting",
        "value": "×2"
      }
    ]
  } */



}

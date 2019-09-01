import { Injectable } from '@angular/core';
import { Card, Attack, Weakness } from './models/card';
import { Pikachu } from './pikachu';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCard(){
    return Pikachu;
  }
}

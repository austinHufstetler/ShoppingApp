import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card,  Attack, Weakness, CardResponse } from './interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getCard(cardId){
    return this.http.get<Card>(`https://api.pokemontcg.io/v1/cards/${cardId}`);
  }

  getCardsByName(cardName){
    return this.http.get<CardResponse>(`https://api.pokemontcg.io/v1/cards?name=${cardName}`);
  }

  getSet(setId){
    return this.http.get<CardResponse>(`https://api.pokemontcg.io/v1/cards?setCode=${setId}`);
  }


}

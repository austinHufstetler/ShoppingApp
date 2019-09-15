export interface Card {
  card: {
    id:                    string;
    name:                  string;
    nationalPokedexNumber: number;
    imageUrl:              string;
    imageUrlHiRes:         string;
    types:                 string[];
    supertype:             string;
    subtype:               string;
    hp:                    string;
    retreatCost:           string[];
    convertedRetreatCost:  number;
    number:                string;
    artist:                string;
    rarity:                string;
    series:                string;
    set:                   string;
    setCode:               string;
    attacks:               Attack[];
    weaknesses:            Weakness[];
  }
}


export interface CardResponse {
  cards: Card[]
}

export interface Attack {
  cost:                string[];
  name:                string;
  text:                string;
  damage:              string;
  convertedEnergyCost: number;
}

export interface Weakness {
  type:  string;
  value: string;
}

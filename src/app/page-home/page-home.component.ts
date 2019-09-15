import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { CardResponse, Card} from '../interfaces/Card'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  list1: Card[];
  list2: Card[];

  constructor( private search: SearchService) { }

  ngOnInit() {
   this.getList1();
   this.getHp();
  }

  getList1(){
    this.search.getCardsByName('bulbasaur').subscribe(
      data => { this.list1 = this.limitList(data.cards, 5);
      },
      err => console.error(err),
      () => console.log('done loading list1')
    );
  }

  getHp(){
    this.search.getSet('sm115').subscribe(
      data => { this.list2 = this.limitList(this.highestHp(data.cards), 5) }
    )
  }

  
  limitList(list: Card[], limit: number){
    return list.slice(0, limit);
  }

  highestHp(list: Card[]){
    return list.sort(function (a, b) {
      return Number(b.hp) - Number(a.hp);
    });
  }

}

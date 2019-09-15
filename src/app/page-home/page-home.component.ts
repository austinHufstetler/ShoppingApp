import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Card } from '../interfaces/Card'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  list1: any;

  constructor( private search: SearchService) { }

  ngOnInit() {
   this.getList1();
  }

  getList1(){
    this.search.getCardsByName('bulbasaur').subscribe(
      data => { this.list1 = data.cards },
      err => console.error(err),
      () => console.log('done loading list1')
    );
  }

}

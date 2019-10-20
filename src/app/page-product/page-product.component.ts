import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { SearchService } from './../search.service';
import { Card } from './../interfaces/card';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit {
  cardResult$ : Observable<Card>
  cardId: string;

  constructor(private activatedRoute :ActivatedRoute, private router:Router, private searchService: SearchService ) { }

  ngOnInit() {
    /*
    this.cardResult$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getCard(params.get('id')))
    ); */

    this.activatedRoute.paramMap.subscribe(params => {
        this.cardId = params.get('id');
        this.cardResult$  = this.searchService.getCard(this.cardId);
    }
    );
// Create simple observable that emits three values
const myObservable = of(1, 2, 3);

// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);

// Logs:

  }
  ngOnDestroy(){
    console.log("im leaving the product page");
  }

}

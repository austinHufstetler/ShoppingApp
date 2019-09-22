import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { SearchService } from './../search.service';
import { CardResponse } from '../interfaces/card';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-search-results',
  templateUrl: './page-search-results.component.html',
  styleUrls: ['./page-search-results.component.scss']
})
export class PageSearchResultsComponent implements OnInit {
  searchResult$ : Observable<CardResponse>

  constructor(private activatedRoute :ActivatedRoute, private router:Router, private searchService: SearchService ) { }

  ngOnInit() {
    this.searchResult$ = this.activatedRoute.queryParamMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getCardsByName(params.get('searchTerm')))
    );

    /*
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getCardsByName(params.get('searchTerm')))
    ).subscribe(console.log);


    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });

    const id = this.activatedRoute.snapshot.paramMap.get('searchTerm');
    console.log(id);
    */
    
    
  }

}

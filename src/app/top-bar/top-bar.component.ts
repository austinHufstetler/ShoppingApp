import { Component, OnInit, Input } from '@angular/core';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  name = 'Store';
  cart = faShoppingCart;
  home = faHome;

  @Input() inputExample;
  constructor() { }

  ngOnInit() {

  }

}

import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() change: EventEmitter<string> = new EventEmitter();

  changeCard(searchTerm: string) {
      this.change.emit(searchTerm)
  }

}

import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-viewdetails',
  imports: [],
  templateUrl: './viewdetails.html',
  styleUrl: './viewdetails.css'
})
export class Viewdetails {
  @Input() product : IProduct = {id : 1, name: 'mego', price: 0, quantity: 0, img: '' , categoryID :0};


  @Output() closeEvent  = new EventEmitter();

  close(){
      this.closeEvent.emit()
  }
}

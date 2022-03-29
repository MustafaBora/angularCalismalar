import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('productName') product:string = "";
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeActionEmit(product:any) {
    this.productClicked.emit(product);
  }

}

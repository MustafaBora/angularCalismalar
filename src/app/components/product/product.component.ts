import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('prodName') product:string = "";
  @Output() myButtonRemoveAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeActionEmit(product:any) {
    this.myButtonRemoveAction.emit(product);
  }

}

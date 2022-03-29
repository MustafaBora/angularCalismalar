import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCalismalar';
  myVar:string = 'giriş';
  products:string[] = ['a','b','c'];

  onMyButtonClicked() {
    this.products.push(this.myVar);
  }

  onProductRemove(produ:string) {
    this.products = this.products.filter(p => p != produ);
  }

}

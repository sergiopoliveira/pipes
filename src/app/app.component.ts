import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private actualAmountInUSD = 50
  private INR : boolean;

  get amount() {
    return this.INR ? this.actualAmountInUSD * 65 : this.actualAmountInUSD
  }

  get format() {
    return this.INR ? 'INR' : 'USD'
  }

  toggleINRandUSD() {
    this.INR = !this.INR
  }
}

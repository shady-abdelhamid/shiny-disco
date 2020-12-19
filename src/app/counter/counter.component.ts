import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public value = 0;

  public increament(): void {
    this.value++;
  }

  public resetValue(): void {
    this.value = 0;
  }
}

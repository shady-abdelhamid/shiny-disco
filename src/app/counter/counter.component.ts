import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(private counterService: CounterService) {

  }

  public value = 0;

  public increament(): void {
    this.value++;
    this.counterService.value = this.value;
  }

  public resetValue(): void {
    this.value = 0;
    this.counterService.value = 0;
  }
}

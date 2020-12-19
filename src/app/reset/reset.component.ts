import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  @Input() public valueChanged = false;

  @Output() public valueReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public reset(): void {
    this.valueReset.emit(true);
  }
}

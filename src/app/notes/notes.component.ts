import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

}

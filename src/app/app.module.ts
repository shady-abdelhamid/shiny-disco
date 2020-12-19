import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ResetComponent } from './reset/reset.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ResetComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

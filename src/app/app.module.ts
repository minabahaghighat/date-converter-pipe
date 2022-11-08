import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShamsiToMiladiPipe } from '../assets/pipes/shamsi-to-miladi.pipe';
import { MiladiToShamsiPipe } from '../assets/pipes/miladi-to-shamsi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShamsiToMiladiPipe,
    MiladiToShamsiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

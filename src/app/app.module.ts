import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import './extensions';

import { AppComponent } from './app.component';
import { InitValueDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    InitValueDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

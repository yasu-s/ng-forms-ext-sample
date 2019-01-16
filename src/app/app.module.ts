import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import './extensions';

import { AppComponent } from './app.component';
import { InitValueDirective, FormExtDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    InitValueDirective,
    FormExtDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text1 = '';
  text2 = 'aaa';
  text3 = '';
  edited1 = false;
  edited2 = false;
  edited3 = false;

  setEdited1(value: boolean): void {
    this.edited1 = value;
  }

  setEdited2(value: boolean): void {
    this.edited2 = value;
  }

  setEdited3(value: boolean): void {
    this.edited3 = value;
  }
}

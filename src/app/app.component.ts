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
  editedForm1 = false;
  editedForm2 = false;

  setEdited1(value: boolean): void {
    this.edited1 = value;
  }

  setEdited2(value: boolean): void {
    this.edited2 = value;
  }

  setEdited3(value: boolean): void {
    this.edited3 = value;
  }

  setEditedForm1(value: boolean): void {
    this.editedForm1 = value;
  }

  setEditedForm2(value: boolean): void {
    this.editedForm2 = value;
  }
}

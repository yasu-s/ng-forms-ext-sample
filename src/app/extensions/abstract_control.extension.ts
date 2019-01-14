export {};

import { AbstractControl } from '@angular/forms';

declare module '@angular/forms/src/model' {

  interface AbstractControl {
    /** */
    edited: boolean;
  }
}

AbstractControl.prototype.edited = false;

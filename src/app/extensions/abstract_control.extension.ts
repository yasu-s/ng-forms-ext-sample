export {};

import { AbstractControl } from '@angular/forms';

declare module '@angular/forms/src/model' {

  interface AbstractControl {
    /** */
    initValue: any;
    /** */
    isEdited(): boolean;
  }
}

AbstractControl.prototype.isEdited = function() {
  const control = this as AbstractControl;
  return control.value !== control.initValue;
};

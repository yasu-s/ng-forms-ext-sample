export {};

import { NgForm } from '@angular/forms';

declare module '@angular/forms/src/directives/ng_form' {

  interface NgForm {
    /**
     * NgForm.touched or dirty
     * @returns touched or dirty
     */
    touchedOrDirty(): boolean;
  }
}

NgForm.prototype.touchedOrDirty = function() {
  const form = this as NgForm;
  return form.touched || form.dirty;
};

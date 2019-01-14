export {};

import { NgModel } from '@angular/forms';

declare module '@angular/forms/src/directives/ng_model' {

  interface NgModel {
    /** */
    edited: boolean;

    /**
     * NgModel.touched or dirty
     * @returns touched or dirty
     */
    touchedOrDirty(): boolean;
  }
}

NgModel.prototype.touchedOrDirty = function() {
  const control = this as NgModel;
  return control.touched || control.dirty;
};

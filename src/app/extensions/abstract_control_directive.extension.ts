export {};

import { AbstractControlDirective, NgForm } from '@angular/forms';

declare module '@angular/forms/src/directives/abstract_control_directive' {

  interface AbstractControlDirective {
    /** */
    isEdited(): boolean;
  }
}

AbstractControlDirective.prototype.isEdited = function() {
  const directive = this as AbstractControlDirective;

  if (directive instanceof NgForm) {
    const form = directive as NgForm;
    const controls = (form.controls) ? Object.keys(form.controls).map(key => form.controls[key]) : [];
    return controls.some(ctr => ctr.isEdited());
  }

  return directive.control.isEdited();
};

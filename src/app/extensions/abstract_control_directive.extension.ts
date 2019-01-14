export {};

import { AbstractControlDirective } from '@angular/forms';

declare module '@angular/forms/src/directives/abstract_control_directive' {

  interface AbstractControlDirective {
    /** */
    isEdited(): boolean;

    /** */
    setEdited(value: boolean): void;
  }
}

AbstractControlDirective.prototype.isEdited = function() {
  const directive = this as AbstractControlDirective;
  return directive.control.edited;
};

AbstractControlDirective.prototype.setEdited = function(value: boolean) {
  const directive = this as AbstractControlDirective;
  directive.control.edited = value;
};

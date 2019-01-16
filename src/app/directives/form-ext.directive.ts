import { Directive, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

/**
 * Form拡張ディレクティブ
 */
@Directive({
  selector: 'form[changeEdited]'
})
export class FormExtDirective implements OnInit, OnDestroy {

  // #region fields

  /** */
  @Output()
  changeEdited = new EventEmitter<boolean>();

  /** */
  private onDestroy$ = new EventEmitter();

  // #endregion

  // #region init

  /**
   * FormExtDirective create.
   * @param ngForm NgForm
   */
  constructor(private ngForm: NgForm) {}

  /**
   *
   */
  ngOnInit(): void {
    if (this.ngForm) {
      this.ngForm.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(_ => {
        this.changeEdited.emit(this.ngForm.isEdited());
      });
    }
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.onDestroy$.emit();
  }

  // #endregion

}

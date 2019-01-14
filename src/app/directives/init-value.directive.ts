import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

/**
 * 初期値設定ディレクティブ
 */
@Directive({
  selector: 'input[initValue]'
})
export class InitValueDirective implements OnInit, OnDestroy {

  // #region fields

  /** */
  @Input()
  set initValue(value: any) {
    this._initValue = value;
    if (this.ngModel && this.ngModel.control) {
      this.ngModel.control.initValue = value;
    }
  }
  get initValue() { return this._initValue; }

  /** */
  @Output()
  changeEdited = new EventEmitter<boolean>();

  /** */
  private _initValue: any;

  /** */
  private onDestroy$ = new EventEmitter();

  // #endregion

  // #region init

  /**
   * InitValueDirective create.
   * @param ngModel NgModel
   */
  constructor(private ngModel: NgModel) {}

  /**
   *
   */
  ngOnInit(): void {
    if (this.ngModel) {
      this.ngModel.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(_ => {
        this.changeEdited.emit(this.ngModel.isEdited());
      });

      if (this.ngModel.control) {
        this.ngModel.control.initValue = this.initValue;
      }
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

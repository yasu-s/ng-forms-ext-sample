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
  initValue: any;

  /** */
  @Input()
  set edited(value: boolean) {
    this._edited = value;
    if (this.ngModel) {
      this.ngModel.edited = value;
    }
  }
  get edited() { return this._edited; }

  /** */
  @Output()
  editedChange = new EventEmitter<boolean>();

  /**  */
  private _edited = false;

  /** */
  private onDestroy$ = new EventEmitter();

  // #endregion

  // #region init

  /**
   * InitValueDirective create.
   * @param ngModel NgModel
   */
  constructor(private ngModel: NgModel) {

  }

  /**
   *
   */
  ngOnInit(): void {
    if (this.ngModel) {
      this.ngModel.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
        this._edited = value !== this.initValue;
        this.editedChange.emit(this._edited);
        this.ngModel.edited = this._edited;
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

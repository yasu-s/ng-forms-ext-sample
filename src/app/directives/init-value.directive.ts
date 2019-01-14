import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
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
      this.ngModel.control.edited = value;
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
        this.ngModel.setEdited(this._edited);

        // Formに設定
        if (this.ngModel.formDirective) {
          const form = this.ngModel.formDirective as NgForm;
          const dirs = (this.ngModel.formDirective as any)._directives;
          const controls = (form.controls) ? Object.keys(form.controls).map(key => form.controls[key]) : [];
          form.setEdited(controls.some(ctr => ctr.edited));
        }
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

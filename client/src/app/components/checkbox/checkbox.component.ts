import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckBoxComponent,
      multi: true,
    },
  ],
  template: `<i
    class="bi bi-calendar-check"
    (click)="toggle()"
    [ngClass]="{ checked: checked }"
  ></i> `,
  styleUrl: './checkbox.component.scss',
})
export class CheckBoxComponent implements ControlValueAccessor {
  checked = false;
  private onTouched!: () => void;
  private onChanged!: (value: boolean) => void;

  constructor() {}

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggle() {
    this.checked = !this.checked;
    this.onChanged(this.checked);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  public _value: any;

  @Input()
  set value(v) {
    this._value = v;
  }

  constructor() {}
}

import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  public editting: boolean;
  public _value: any;

  @Input()
  set value(v) {
    this._value = v;
  }

  constructor() {}

  @HostListener('dblclick', ['$event'])
  onEdit() {
    this.editting = true;
  }

  ngOnInit() {
    this.editting = false;
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this._value = e.target['value'];
      this.editting = false;
    }
  }
}

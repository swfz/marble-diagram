import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  public editting: boolean;
  public _value: any;
  public closing: EventEmitter<any> = new EventEmitter<any>();
  private tmpValue: any;

  @Input()
  set value(v) {
    this._value = v;
  }
  @HostBinding('attr.slidable') slidable = true;
  @HostListener('dblclick', ['$event'])
  onEdit() {
    this.editting = true;
  }

  constructor() {}

  ngOnInit(): void {
    this.editting = false;
    this.tmpValue = this._value;
  }

  onKeyPress(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.focusOut();
    }
    this.tmpValue = e.target['value'];
  }

  destroyMarble(): void {
    this.closing.emit();
  }

  onOutsideClick(): void {
    this.focusOut();
  }

  private focusOut() {
    this._value = this.tmpValue;
    this.editting = false;
  }
}

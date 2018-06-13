import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  public editting: boolean;
  public _value: any;
  public closing: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set value(v){
    this._value = v;
  }

  constructor(
  ) { }
  @HostBinding('attr.slidable') slidable = true;


  @HostListener('dblclick', ['$event']) onEdit(){
    this.editting = true;
  }

  ngOnInit() {
    this.editting = false;
  }

  onKeyPress(e: KeyboardEvent) {
    if(e.key === 'Enter'){
      console.log(e);
      this._value = e.target['value'];
      this.editting = false;
    }
  }

  destroyMarble(){
    this.closing.emit();
  }
}

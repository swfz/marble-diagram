import {
  Component,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  public _value: any;
  private valueLength: number;
  private threashold: number;

  @ViewChild('editor') editor;

  @Input()
  set value(v) {
    this._value = v;
  }
  @HostBinding('attr.slidable') slidable = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.threashold = 1;
  }

  onKeyUp(e: KeyboardEvent): void {
    this.valueLength = e.target['innerText'].length;

    if(this.editor.nativeElement.clientHeight > 40) {
      this.threashold = this.valueLength;
    }

    if(this.editor.nativeElement.clientHeight > 40){
      this.renderer.setStyle(
        this.editor.nativeElement,
        'line-height',
        '1'
        );
    } else {
       this.renderer.setStyle(
        this.editor.nativeElement,
        'line-height',
        '40'
        );
    }
  }
}

import {
  Component,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

export interface IStyle {
  key: string;
  value: string;
}
@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  public _value: any;

  @ViewChild('editor') editor;

  @Input()
  set value(v) {
    this._value = v;
  }
  @HostBinding('attr.slidable') slidable = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  onKeyUp(e: KeyboardEvent): void {
    const lineNumber = e.target['childNodes'].length;
    if(lineNumber > 1){
      this.setEditorStyle([
        {key: 'line-height', value: '1'},
        {key: 'text-align', value: 'left'}
      ]);
    } else {
      this.setEditorStyle([
        {key: 'line-height', value: '4'},
        {key: 'text-align', value: 'center'}
      ]);
    }
 }

  private setEditorStyle(styles: IStyle[]) {
    styles.forEach(style => {
      this.renderer.setStyle(
        this.editor.nativeElement,
        style.key,
        style.value
      );
    });
  }
}

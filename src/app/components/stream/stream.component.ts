import {Component, ComponentFactoryResolver, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {MarbleComponent} from '../marble/marble.component';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
  entryComponents: [MarbleComponent]
})
export class StreamComponent implements OnInit {
  @Input() marbles: any;

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.marbles);
    // this.marbles = [];
  }

}

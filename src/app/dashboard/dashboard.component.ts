import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as html2canvas from 'html2canvas';

export interface ICard {
  title: string;
  cols: number;
  rows: number;
  data: any;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private operators: { [key: string]: string };
  public operatorKeys: string[];
  public cards: ICard[];
  public marbles: number[];

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  ngOnInit() {
    this.cards = [
      { title: 'Stream', cols: 2, rows: 1, data: [1, 2, 3] },
      { title: 'Operator', cols: 2, rows: 1, data: 'map(x => x + 1)' }
    ];

    this.operators = {
      bufferTime: 'bufferTime(100)',
      concatMap: 'concatMap(i => 10*i-----10*i-----10*i--|)',
      distinctUntilChanged: 'distinctUntilChanged((a, b) => a.name === b.name)',
      filter: 'filter(x => x % 2 === 1)',
      from: 'from([10,20,30])',
      fromEvent: `fromEvent(element, 'click')`,
      interval: 'interval(3000)',
      map: 'map(x => x * 10)',
      mergeMap: 'mergeMap(i => 10*i-----10*i-----10*i--|)',
      scan: 'scan((acc, cur) => acc + cur, 0)',
      skip: 'skip(3)',
      skipWhile: 'skipWhile(x => x < 4)',
      takeWhile: 'takeWhile(x => x == 5)',
    };

    this.marbles = [1,2,3,4,5,6,7,8];
    this.operatorKeys = Object.keys(this.operators);
  }

  addStream(number: number) {
    this.cards.push(
      {
        title: 'Stream',
        cols: 2,
        rows: 1,
        data: this.marbles.slice(0, number)
      }
    );
  }

  addOperator(key: string) {
    this.cards.push({
      title: 'Operator',
      cols: 2,
      rows: 1,
      data: this.operators[key]
    });
  }

  removeCard(i: number) {
    this.cards.splice(i, 1);
  }

  addMarble(i) {
    const size = this.cards[i].data.length;
    this.cards[i].data.push(size + 1);
  }

  isStream(card): boolean {
    return card.title === 'Stream';
  }

  isOperator(card): boolean {
    return card.title === 'Operator';
  }

  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
}

import {Component, OnInit} from '@angular/core';

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
  private operators: {[key: string]: string};
  public operatorKeys: string[];
  public cards: ICard[];

  ngOnInit() {
    this.cards = [
      { title: 'Stream', cols: 2, rows: 1, data: [1,2,3] },
      { title: 'Operator', cols: 2, rows: 1, data: 'map(x => x + 1)' },
    ];

    this.operators = {
      map: 'map(x => x * 2)',
      filter: 'filter(x => x % 2 === 0)',
      scan: 'scan((acc, x) => acc + x)'
    };

    this.operatorKeys = Object.keys(this.operators);
  }

  addStream(){
    console.log(this.cards);
    this.cards.push({title: 'Stream', cols: 2, rows: 1, data: [1,2,3,4]});
  }

  addOperator(key: string){
    this.cards.push({
      title: 'Operator', cols: 2, rows: 1, data: this.operators[key]
    });
  }

  removeCard(i: number) {
    this.cards.splice(i,1);
  }

  addMarble(i){
    const size = this.cards[i].data.length;
    this.cards[i].data.push(size);
  }

  isStream(card): boolean {
    return card.title === 'Stream';
  }

  isOperator(card): boolean {
    return card.title === 'Operator';
  }
}

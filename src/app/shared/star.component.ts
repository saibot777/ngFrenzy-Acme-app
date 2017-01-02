import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }

  @Input() rating: number;
  starWidth: number;
@Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 100/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}

import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }

  rating: number = 4;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 100/5;
  }

}

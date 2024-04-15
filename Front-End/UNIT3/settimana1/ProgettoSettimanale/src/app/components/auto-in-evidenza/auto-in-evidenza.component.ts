import { Component } from '@angular/core';
import { Auto } from 'src/app/models/auto.interface';
@Component({
  selector: 'app-auto-in-evidenza',
  templateUrl: './auto-in-evidenza.component.html',
  styleUrls: ['./auto-in-evidenza.component.scss'],
})
export class AutoInEvidenzaComponent {
  auto!: Auto[];
  randomIndexes: number[] = [];

  constructor() {
    this.getAuto().then((auto) => {
      this.auto = auto;
      this.selectRandomIndexes();
    });
  }

  async getAuto() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }
  selectRandomIndexes(): void {
    if (this.auto && this.auto.length > 0) {
      while (this.randomIndexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * this.auto.length);
        if (!this.randomIndexes.includes(randomIndex)) {
          this.randomIndexes.push(randomIndex);
        }
      }
    }
  }
}

import { Component } from '@angular/core';
import { Auto } from 'src/app/models/auto.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {
  autos: Auto[] = [];

 
    constructor() {
      this.loadFiatAutos();
    }
  
    async loadFiatAutos() {
      try {
        const response = await fetch('assets/db.json'); 
        const allCars: Auto[] = await response.json();
        this.autos = allCars.filter(car => car.brand === 'Fiat');
      } catch (error) {
        console.error('Si è verificato un errore nel recupero dei dati delle auto Fiat:', error);
      }
    }
  }


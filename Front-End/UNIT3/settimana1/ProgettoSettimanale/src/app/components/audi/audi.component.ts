import { Component } from '@angular/core';
import { Auto } from 'src/app/models/auto.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  autos: Auto[] = [];

 
    constructor() {
      this.loadFiatAutos();
    }
  
    async loadFiatAutos() {
      try {
        const response = await fetch('assets/db.json'); 
        const allCars: Auto[] = await response.json();
        this.autos = allCars.filter(car => car.brand === 'Audi');
      } catch (error) {
        console.error('Si è verificato un errore nel recupero dei dati delle auto Fiat:', error);
      }
    }

}

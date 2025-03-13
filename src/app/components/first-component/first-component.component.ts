import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Hyago';
  age: number = 25;
  job = 'Desenvolvedor';
  hobbie = ['Ler', 'Estudar', 'Correr'];
  car = {
    brand: 'Chevrolet',
    model: 'Astra',
    year: 2011,
  };

  constructor() {}

  ngOnInit(): void {}
}

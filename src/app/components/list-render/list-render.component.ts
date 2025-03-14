import { Animal } from './../../Animal';
import { Car } from '../../CarInterface';
import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  constructor(private listService: ListService) {}
  ngOnInit(): void {}

  animalDetails = '';
  carDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  showInfo(car: Car): void {
    this.carDetails = `O carro é da marca ${car.brand}, modelo ${car.model}, lançado em ${car.year}`;
  }

  cars: Car[] = [
    { brand: 'Toyota', model: 'Corolla', year: 2020 },
    { brand: 'Honda', model: 'Civic', year: 2019 },
    { brand: 'Ford', model: 'Focus', year: 2018 },
    { brand: 'Chevrolet', model: 'Onix', year: 2021 },
    { brand: 'Volkswagen', model: 'Golf', year: 2017 },
    { brand: 'Hyundai', model: 'HB20', year: 2022 },
    { brand: 'Jeep', model: 'Compass', year: 2023 },
    { brand: 'Nissan', model: 'Kicks', year: 2023 },
    { brand: 'Fiat', model: 'Toro', year: 2019 },
    { brand: 'Renault', model: 'Duster', year: 2018 },
  ];

  animals: Animal[] = [
    {
      name: 'bbs',
      type: 'dog',
      age: 10,
    },
    {
      name: 'hgs',
      type: 'cat',
      age: 5,
    },
    {
      name: 'bob',
      type: 'dog',
      age: 3,
    },
    {
      name: 'james',
      type: 'horse',
      age: 1,
    },
  ];

  removeAnimal(animal: Animal) {
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  removeCarro(car: Car) {
    this.cars = this.listService.removeCar(this.cars, car);
  }
}

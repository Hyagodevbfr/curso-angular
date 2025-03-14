import { Animal } from './../../Animal';
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

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

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
}

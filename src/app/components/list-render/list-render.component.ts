import { Animal } from './../../Animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  constructor() {}
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
}

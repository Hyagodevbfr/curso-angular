import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['gree-title', 'small-title'];

  underline = 'underline-title';

  constructor() {}
  ngOnInit(): void {}
}

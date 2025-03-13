import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
  }

  constructor() {}
  ngOnInit(): void {}
}

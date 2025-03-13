import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = 'Daniel';
  person = {
    age: 25,
    nationalId: '123.456.789-00',
  };
  title = 'curso-angular';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Javier';
  age = 30;
  btnDisabled = false;

  person = {
    name: "Javier objeto person",
    age: 18
  }

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

}

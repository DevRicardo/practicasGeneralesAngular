import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-ng-class></app-ng-class>

    <h3 [appResaltado]="'orange'">
      Hola mundo
    </h3>

    <app-ng-swtch></app-ng-swtch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

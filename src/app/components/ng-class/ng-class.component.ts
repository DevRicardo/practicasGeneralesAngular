import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {

  alert = 'alert alert-danger';
  loading = false;
  propiedades: Object = {
    danger: true
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout( () => this.loading = false, 3000);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Esto es una etiqueta que trabaja con ngStyle....
    </p>

    <button class="btn btn-primary" (click)="size = size+5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="size = size-5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 40;
  constructor() { }

  ngOnInit() {
  }

}

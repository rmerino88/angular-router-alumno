import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {

  @Output() eventoEmitido = new EventEmitter();
  constructor() { }


  cambiamiMenu(): void {
    console.log('estoy en el de dashboard');
    this.eventoEmitido.emit();
  }

}

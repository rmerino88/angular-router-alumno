import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ejemplo de Angular Router ';
  boton = 'Click para paciente';
  paciente = false;
  medico =  true;
  dashboard = '';
  home = '';
  tercero = true;
  menu1 = '';
  menu2 = '';
  menu3 = '';
  entradilla = '';

  public cambiaMenu() {
    console.log('ahora en el principal');
    //  this.tercero = (this.tercero==true)?false:true;
    this.boton = (this.boton === 'Click para paciente') ? 'Click para medico' : this.boton;
    this.medico = !this.medico // (this.medico == true)?false:true;
    this.paciente = !this.paciente // (this.paciente == true)?false:true;

    this.title = 'Ahora estoy en un menu cambiado';
    this.menu1 = (this.menu1 === 'primero') ? 'cuarto' : 'primero';
    this.menu2 = (this.menu2 === 'segundo') ? 'quintocuarto' : 'segundo';
    this.menu3 = (this.menu3 === 'tercero') ? 'sexto' : 'tercero';
    console.log('tercero es:' + this.tercero);
  }

  public queVoyqueMancho() {
    console.log('Me han invocado desde un evento load en el componente');
  }
}

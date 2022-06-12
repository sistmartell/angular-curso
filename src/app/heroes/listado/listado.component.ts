import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Superman','Ironman','Hulk','Capitan America'];

  heroeBorrado: string = '';


  borrarHeroe() {
     // this.heroes.splice(this.heroes.length-1 ,1);
     this.heroeBorrado = this.heroes.shift() || '';
  }
}

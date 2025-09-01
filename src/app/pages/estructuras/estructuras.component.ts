import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent {
  mostrar: boolean = true;

  tecnologias: string[] = ['Angular', 'Ionic', 'NodeJS', 'TypeScript'];

  opcion: string = 'A';
}

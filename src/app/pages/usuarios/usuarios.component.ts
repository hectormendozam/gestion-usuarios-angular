import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];
  loading: boolean = true;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.loading = true;
    setTimeout(() => {
      this.usuariosService.getUsuarios().subscribe((data: any) => {
        this.usuarios = data;
        this.loading = false;
      });
    }, 5000);
  }
}

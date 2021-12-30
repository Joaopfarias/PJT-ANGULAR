import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../usuario/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: Array<any> = new Array();
  usuario: UsuarioModel = new UsuarioModel();
  value: any = {};
  constructor(
    private usuarioService: UsuarioService,
    private router: Router)  {
      this.value = this.router.getCurrentNavigation()?.extras.state;
    }

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario(){
    
      this.usuarioService.listarUsuario(this.value.id).subscribe(usuarios => {
        this.usuarios = usuarios
        console.log(this.usuarios)
      }, err => {
        console.log('Erro ao listar os usuarios', err)
      })
  }

}

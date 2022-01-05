import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/usuario.model';
import { UsuarioLoginModel } from '../usuario/usuario.login.model';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarioLogin: UsuarioLoginModel = new UsuarioLoginModel();
  usuarios: Array<any> = new Array();

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router) {
     }

  ngOnInit(): void {
  }
  logarUsuario(){
    this.usuarioLogin.username = this.usuario.login
    this.usuarioLogin.password = this.usuario.senha
    this.usuarioService.logarUsuarios(this.usuarioLogin).subscribe(usuarios => {
      if(usuarios.login == this.usuario.login){
        this.router.navigate(['/Home'], { state: { id: usuarios.id} });
      }
    }, err => {
      console.log('Erro ao logar usuario', err)
    })
  }
}

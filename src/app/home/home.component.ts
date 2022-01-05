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
      console.log("ID:" + this.value.id)
    }

  ngOnInit(): void {
    this.listarUsuario();
  }
  alterarNomeSobrenome(){
    this.router.navigate(['/Alterar'], { state: { id: this.usuario.id, senha: this.usuario } });
  }
  
  alterarSenha(){
    console.log(this.usuario.id)
    console.log(this.usuario.senha)
    console.log(this.usuario)
    this.router.navigate(['/Alterarsenha'], { state: { id: this.usuario.id, senha: this.usuario } });
  }
  listarUsuario(){
      this.usuarioService.listarUsuario(this.value.id).subscribe(usuarios => {
        this.usuario = usuarios
      }, err => {
        console.log('Erro ao listar os usuarios', err)
      })
  }

}

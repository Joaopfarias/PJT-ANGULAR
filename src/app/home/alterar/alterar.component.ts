import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuario();
  }
  
  alterar(id:any){
    this.usuarioService.atualizarSenha(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
     }, err => { 
       console.log('Erro ao atualizar', err)
      })
  }

  listarUsuario(){
    this.usuarioService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log('Erro ao listar os usuarios', err)
    })
  }
}

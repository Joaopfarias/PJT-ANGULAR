import { Component, OnInit } from '@angular/core';
import { AlterarModel } from '../alterar/alterar.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  usuariog: AlterarModel = new AlterarModel();
  usuariop: AlterarModel = new AlterarModel();
  usuarios: Array<any> = new Array();
  value: any = {};

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private _location: Location ) {
      this.value = this.router.getCurrentNavigation()?.extras.state; }

  ngOnInit(): void {
    this.listarUsuario();
    console.log("ID" + this.value.id)
  }

  voltar() {
    this._location.back();
  }
  alterar(){
    console.log()
    console.log(this.usuariop)
    this.usuarioService.atualizar(this.value.id, this.usuariop).subscribe(usuario => {
      this.router.navigate(['/Home'], { state: { id: this.value.id} })
     }, err => { 
       console.log('Erro ao atualizar', err)
      })
  }

  listarUsuario(){
    this.usuarioService.listarUsuario(this.value.id).subscribe(usuarios => {
      this.usuariog = usuarios
    }, err => {
      console.log('Erro ao listar os usuarios', err)
    })
}
}

import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();
  

  constructor(
    private usuarioService: UsuarioService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  
  cadastrar(){
    console.log(this.usuario)
    this.usuarioService.cadastrarUsuarios(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.router.navigate(['/Login']);
     }, err => { 
       console.log('Erro ao cadastrar', err)
      })
  }
}
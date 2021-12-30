import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UsuarioModel } from "./usuario.model";
import { UsuarioLoginModel } from "./usuario.login.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    constructor(public http: HttpClient){ }
    logarUsuarios(usuario : UsuarioLoginModel) : Observable<any>{
        return this.http.post("http://localhost:3000/usuario/logar/", usuario)
    }
    removerUsuarios(id:any, usuario: UsuarioModel){
        usuario.id = id;
        return this.http.delete("http://localhost:3000/usuario/remover/", id)
    }
    atualizarSenha(id:any, usuario: UsuarioModel): Observable<any>{
        usuario.id = id;
        return this.http.put("http://localhost:3000/usuario/atualizar/", usuario)
    }
    cadastrarUsuarios(usuario: UsuarioModel): Observable<any>{
        return this.http.post("http://localhost:3000/usuario/cadastrar/", usuario)
    }
    listarUsuarios() : Observable<any>{
        return this.http.get("http://localhost:3000/usuario/listar/");
    }
    listarUsuario(id:number) : Observable<any>{
        return this.http.get("http://localhost:3000/usuario/listar/".concat(id.toString()));
    }
}
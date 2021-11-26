import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/Services/usuarioService/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  public rol='';

  constructor(private userService:UsuarioService, private router:Router) {
    let usuarioActivo = localStorage.getItem('usuarioActivo');
     
    if(!(usuarioActivo==null  ||  usuarioActivo==undefined)){
      router.navigate(['/dashboard']);
    }
   }

  usuario:Usuario={
    nombre:'',
    comentario:''
  }


  ngOnInit(): void {
   
  }

  comprobarCampos():boolean{
    if( this.usuario.nombre=='' || this.usuario.comentario==''  ){
      return false;
    }else{
      return true;
    }
  }

  async registrarse(){

    this.userService.addComment(this.usuario).subscribe(
      res=>{
        alert(res.mensaje)
        this.router.navigate(['/']);
    
      },err=>{
        alert(err.respuesta);
      }
    ) 

  }
}
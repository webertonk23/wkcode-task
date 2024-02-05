import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void { }
  
  deslogar() {
    this.usuarioService.deslogar();
  }
}

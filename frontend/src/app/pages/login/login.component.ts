import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/IUsuarios';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService

  ) {  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  logar() {
    if (this.formLogin!.invalid) return;
    var usuario = this.formLogin!.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario).subscribe((response) => {
      console.log(response);
      if (!response) {
        this.toastr.error('Falha na autenticação', 'Usuário ou senha incorretos.');
      }
    })
  }
}

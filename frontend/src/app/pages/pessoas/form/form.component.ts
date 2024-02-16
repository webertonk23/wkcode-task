import { Component, Input, OnInit } from '@angular/core';
import { Pessoas } from '../../../interfaces/Pessoas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PessoasService } from '../../../services/pessoas.service';
import { Router } from '@angular/router';
import { BuscaCepService } from '../../../services/busca-cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  @Input() title = '';
  @Input() pessoa_id!: string;

  pessoa?: Pessoas = {
    nome: '',
    cpf: '',
    telefones: [],
    email: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
  };

  pessoaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoasService,
    private buscaCep: BuscaCepService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPessoa();

    this.pessoaForm = this.fb.group({
      nome: [this.pessoa?.nome ?? '', Validators.required],
      cpf: [this.pessoa?.cpf ?? '', Validators.required],
      telefone: [this.pessoa?.telefones ?? []],
      email: [this.pessoa?.email ?? ''],
      logradouro: [this.pessoa?.logradouro ?? ''],
      numero: [this.pessoa?.numero ?? ''],
      complemento: [this.pessoa?.complemento ?? ''],
      bairro: [this.pessoa?.bairro ?? ''],
      cidade: [this.pessoa?.cidade ?? ''],
      uf: [this.pessoa?.uf ?? ''],
      cep: [this.pessoa?.cep ?? ''],
      telefones : this.fb.array(this.pessoa!.telefones ?? [])
    });
  }

  getCep() {
    const cep = this.pessoa?.cep?.replace(/\D+/g, "")

    this.buscaCep.get(cep!).subscribe((result) => {
      this.pessoa!.logradouro = result.logradouro;
      this.pessoa!.bairro = result.bairro;
      this.pessoa!.cidade = result.localidade;
      this.pessoa!.uf = result.uf;
      this.pessoa!.cep = result.cep;

      console.log(result);
    });

  }

  private getPessoa() {
    if (this.pessoa_id) {
      this.pessoaService.getPessoa(parseInt(this.pessoa_id)).subscribe((result) => {
        this.pessoa = result;
      });
    }
  }

  async salvarPessoa() {
    const formData = this.pessoaForm.value;

    if (this.pessoaForm.invalid) {

      // this.snackBar.open('Falha!', 'Informações faltando no formulario', {
      //   duration: 3000
      // });
      return;
    }

    try {
      await this.pessoaService.createPessoa(formData).toPromise();

      // this.snackBar.open('Sucesso!', 'Pessoa criada com sucesso!', {
      //   duration: 3000
      // });

      this.router.navigate(['/pessoas']);

    } catch (error) {
      console.error(error);

      // this.snackBar.open('Falha!', 'Erro ao criar pessoa!', {
      //   duration: 3000
      // });
    }
  }

  async editarPessoa() {
    const formData = this.pessoaForm.value;

    if (this.pessoaForm.invalid) {
      // this.snackBar.open('Falha!', 'Informações faltando no formulario', {
      //   duration: 3000
      // });
      return;
    }

    try {
      await this.pessoaService.updatePessoa(parseInt(this.pessoa_id), formData).toPromise();

      // this.snackBar.open('Sucesso!', 'Pessoa editada com sucesso!', {
      //   duration: 3000
      // });

      this.router.navigate([`/pessoas/editar/${this.pessoa_id}`]);

    } catch (error) {
      console.error(error);

      // this.snackBar.open('Falha!', 'Erro ao editar pessoa!', {
      //   duration: 3000
      // });
    }
  }
}

import { PessoasService } from '../../servicos/pessoas/pessoas.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Pessoa } from '../../interfaces/pessoa.interface';
import { ToastService } from '../../servicos/toast.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css',
})
export class PessoaFormComponent implements OnInit {
  @Input() titleText!: '';
  @Input() pessoa_id!: number;

  pessoa?: Pessoa = {
    nome: '',
    cpf_cnpj: '',
    tipo: '',
    data_nascimento: '',
    sexo: '',
    telefone1: '',
    telefone2: '',
    telefone3: '',
    email: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    cliente: 0,
    fornecedor: 0,
    funcionario: 0,
  };

  pessoaForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private PessoaService: PessoasService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getPessoa();

    this.pessoaForm = this.fb.group({
      nome: [this.pessoa?.nome ?? '', Validators.required],
      cpf_cnpj: [this.pessoa?.cpf_cnpj ?? '', Validators.required],
      tipo: [this.pessoa?.tipo ?? ''],
      data_nascimento: [this.pessoa?.data_nascimento ?? ''],
      sexo: [this.pessoa?.sexo ?? ''],
      telefone1: [this.pessoa?.telefone1 ?? ''],
      telefone2: [this.pessoa?.telefone2 ?? ''],
      telefone3: [this.pessoa?.telefone3 ?? ''],
      email: [this.pessoa?.email ?? '', Validators.email],
      endereco: [this.pessoa?.endereco ?? ''],
      numero: [this.pessoa?.numero ?? ''],
      complemento: [this.pessoa?.complemento ?? ''],
      bairro: [this.pessoa?.bairro ?? ''],
      cidade: [this.pessoa?.cidade ?? ''],
      uf: [this.pessoa?.uf ?? ''],
      cep: [this.pessoa?.cep ?? ''],
      cliente: [this.pessoa?.cliente ?? ''],
      fornecedor: [this.pessoa?.fornecedor ?? ''],
      funcionario: [this.pessoa?.funcionario ?? ''],
    });
  }

  getPessoa(){
    if (this.pessoa_id) {
      this.PessoaService.getPessoa(this.pessoa_id).subscribe((result) => {
        this.pessoa = result;
      });
    }
  }

  async salvarPessoa() {
    const formData = this.pessoaForm.value;

    if (this.pessoaForm.invalid) {
      this.toastService.showToast('Informações faltando no formulario!');
      return;
    }


    try {
      await this.PessoaService.createPessoa(formData).toPromise();

      this.activeModal.close('success');

      Swal.fire('Sucesso!', 'Pessoa criada com sucesso!', 'success');

      // this.toastService.showToast('Pessoa criada com sucesso!');
    } catch (error) {
      console.error(error);
      this.toastService.showToast('Erro ao salvar a tarefa!');
    }
  }

  async editarPessoa() {
    const formData = this.pessoaForm.value;

    if (this.pessoaForm.invalid) {
      this.toastService.showToast('Informações faltando no formulario!');
      return;
    }

    try {
      await this.PessoaService.updatePessoa(this.pessoa_id, formData).toPromise();

      this.activeModal.close('success');

      this.toastService.showToast('Pessoa editada com sucesso!');
    } catch (error) {
      console.error(error);
      this.toastService.showToast('Erro ao editar a tarefa!');
    }
  }
}

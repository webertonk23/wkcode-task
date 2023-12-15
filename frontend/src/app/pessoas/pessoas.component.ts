import { PageTitleService } from './../servicos/page-title.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

import { ToastService } from './../servicos/toast.service';
import { PessoasService } from '../servicos/pessoas/pessoas.service';
import { Pessoa } from '../interfaces/pessoa.interface';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css',
})
export class PessoasComponent implements OnInit {
  @Output() pageTitle = new EventEmitter<string>();

  allPessoas: Pessoa[] = [];
  pessoas: Pessoa[] = [];

  modalOptions = {
    centered: true,
    scrollable: true,
    size: 'lg',
    windowClas: 'custom-modal-right',
    backdrop: true,
  };

  constructor(
    private pessoaService: PessoasService,
    private router: Router,
    private modalService: NgbModal,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('Pessoas');

    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getPessoas().subscribe((response) => {
      const data = response;

      this.allPessoas = data;
      this.pessoas = data;
    });
  }

  pesquisa(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.pessoas = this.allPessoas.filter((item) => {
      return item.nome.toLocaleLowerCase().includes(value);
    });
  }

  addPessoa() {
    const modalRef = this.modalService.open(
      PessoaFormComponent,
      this.modalOptions
    );
    modalRef.componentInstance.titleText = 'Nova Pessoa!';

    modalRef.result
      .then((result) => {
        console.log(result);

        if (result === 'success') {
          this.getPessoas();
        }
      })
      .catch((reason) => {
        console.log(`Dismissed with reason: ${reason}`);
      });
  }

  editePessoa(pessoa_id: number) {
    const modalRef = this.modalService.open(
      PessoaFormComponent,
      this.modalOptions
    );
    modalRef.componentInstance.titleText = 'Editar Pessoa!';
    modalRef.componentInstance.pessoa_id = pessoa_id;

    modalRef.result
      .then((result) => {
        console.log(result);

        if (result === 'success') {
          this.getPessoas();
        }
      })
      .catch((reason) => {
        console.log(`Dismissed with reason: ${reason}`);
      });
  }

  deletePessoa(pessoa_id: number) {
    console.log('deletando pessoas')

    Swal.fire({
      title: 'Tem certeza que deseja deletar o registro?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await this.pessoaService.deletePessoa(pessoa_id).toPromise();

          Swal.fire({
            title: 'Excluído!',
            text: 'O registro foi excluído com sucesso.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500,
          });

          this.getPessoas();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Falha!',
            text: 'Erro ao deletar registro!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500,
          });
        }
      }
    });
  }
}

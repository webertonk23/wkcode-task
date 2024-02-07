import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { Pessoas } from '../../interfaces/Pessoas';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit{
  pessoas?: Pessoas[];

  constructor( 
    private pessoasService: PessoasService
  ) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(){
    this.pessoasService.getPessoas().subscribe({
      next: (res) => this.pessoas = res,
      error: (err) => console.log(err),
    })
  }

  delete(pessoa_id: string) {
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
          await this.pessoasService.deletePessoa(parseInt(pessoa_id)).toPromise();

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

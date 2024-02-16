import { Component, OnInit } from '@angular/core';
import { Status } from '../../interfaces/Status';
import { StatusService } from '../../services/status.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit{
  status?: Status[];
  filter?: Status[];

  constructor( 
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(){
    this.statusService.get().subscribe({
      next: (res) => {
        this.status = res
        this.filter = res
      },
      error: (err) => console.log(err),
    })
  }

  pesquisa(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.status = this.filter!.filter((item) => {
      return item.titulo.toLocaleLowerCase().includes(value);
    });
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
          await this.statusService.delete(parseInt(pessoa_id)).toPromise();

          Swal.fire({
            title: 'Excluído!',
            text: 'O registro foi excluído com sucesso.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500,
          });

          this.getStatus();
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

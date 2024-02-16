import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../interfaces/Projeto';
import { ProjetosService } from '../../services/projetos.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent  implements OnInit{
  projetos?: Projeto[];
  filter?: Projeto[];

  constructor( 
    private projetoService: ProjetosService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProjetos();
  }

  getProjetos(){
    this.projetoService.get().subscribe({
      next: (res) => {
        this.projetos = res
        this.filter = res
      },
      error: (err) => console.log(err),
    })
  }

  pesquisa(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.projetos = this.filter!.filter((item) => {
      return item.titulo.toLocaleLowerCase().includes(value);
    });
  }

  open(id: string){
    this.router.navigate([`/projetos/${id}/tasks`]);
  }

  delete(id: string) {
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
          await this.projetoService.delete(parseInt(id)).toPromise();

          this.toastr.success('Sucesso!', 'O registro foi excluído com sucesso!');
          this.getProjetos();
        } catch (error) {
          console.error(error);
          this.toastr.error('Falha!', 'Erro ao deletar registro!');
        }
      }
    });
  }

}

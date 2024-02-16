import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../../interfaces/Projeto';
import { ProjetosService } from '../../../services/projetos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  projeto_id!: string;

  projeto?: Projeto = {
    titulo: '',
    descricao: '',
    sprints: []
  };

  constructor(
    private projetoService: ProjetosService,
    private router: Router,
    private AcRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getProjeto();
  }

  private getProjeto() {
    this.projeto_id = this.AcRoute.snapshot.paramMap.get('id')! ?? '';
    if (this.projeto_id) {
      this.projetoService.show(parseInt(this.projeto_id)).subscribe((result) => {
        this.projeto = result;
      });
    }
  }
}

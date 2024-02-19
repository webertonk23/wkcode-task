import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { Projeto } from '../../../interfaces/Projeto';
import { ProjetosService } from '../../../services/projetos.service';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { SprintModalComponent } from './sprint-modal/sprint-modal.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  projeto_id!: string;

  projeto?: Projeto = {
    titulo: '',
    descricao: '',
    sprints: []
  };

  modalOptions = {
    centered: true,
    scrollable: true,
    size: 'xl',
    windowClas: 'custom-modal-right',
    backdrop: true,
  };

  constructor(
    private projetoService: ProjetosService,
    private router: Router,
    private AcRoute: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: NgbModal,
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

  addTask() {
    const modalRef = this.modalService.open(
      TaskModalComponent,
      this.modalOptions
    );
    modalRef.componentInstance.titleText = 'Nova Task!';

    modalRef.result
      .then((result) => {
        console.log(result);

        if (result === 'success') {
          this.getProjeto();
        }
      })
      .catch((reason) => {
        console.log(`Dismissed with reason: ${reason}`);
      });
  }

  addSprint() {
    const modalRef = this.modalService.open(
      SprintModalComponent,
      this.modalOptions
    );
    modalRef.componentInstance.titleText = 'Nova Sprint!';

    modalRef.result
      .then((result) => {
        console.log(result);

        if (result === 'success') {
          this.getProjeto();
        }
      })
      .catch((reason) => {
        console.log(`Dismissed with reason: ${reason}`);
      });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Task } from '../../inetrfaces/Task';
import { TasksService } from '../../services/tasks.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input() titleText!: string;
  @Input() painel_id!: number;
  @Input() categoria_id!: number;

  @Input() task_id!: number;

  task?: Task = {
    titulo: '',
    descricao: ''
  };

  taskForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private taskServices: TasksService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.task_id) {
      this.taskServices.getTask(this.task_id).subscribe((result) => {
        this.task = result.data;
      });
    }

    this.taskForm = this.fb.group({
      titulo: [this.task?.titulo ?? '', Validators.required],
      descricao: [this.task?.descricao ?? '', Validators.required],
    });
  }

  async salvarTask() {
    const formData = this.taskForm.value;
    formData.painel_id = this.painel_id;
    formData.categoria_id = this.categoria_id;

    if (this.taskForm.invalid) {
      this.toastr.success('Informações faltando no formulario!', 'Falha');
      return;
    }


    try {
      await this.taskServices.createTask(formData).toPromise();

      this.activeModal.close('success');

      this.toastr.success('Sucesso!', 'Sucesso');
    } catch (error) {
      console.error(error);
      this.toastr.error('Erro ao salvar a tarefa!', 'Erro');
    }
  }

  async editarTask() {
    const formData = this.taskForm.value;

    if (this.taskForm.invalid) {
      this.toastr.success('Informações faltando no formulario!', 'Falha');
      return;
    }

    try {
      await this.taskServices.updateTask(this.task_id, formData).toPromise();

      this.activeModal.close('success');

      this.toastr.success('Sucesso!', 'Sucesso');
    } catch (error) {
      console.error(error);
      this.toastr.error('Erro ao editar a tarefa!', 'Erro');
    }
  }
}

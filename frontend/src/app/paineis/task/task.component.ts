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
    descricao: '',
    previsao_inicio: '',
    previsao_termino: '',
    pevisao_duracao: '',
    data_inicio: '',
    data_termino: '',
    duracao: '',
  };

  taskForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private taskServices: TasksService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  toDate(date: string) {
    const data = new Date(date); 

    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada;
  }

  ngOnInit(): void {
    if (this.task_id) {
      this.taskServices.getTask(this.task_id).subscribe((result) => {
        this.task = result.data;

        this.task.previsao_inicio = this.task.previsao_inicio ? this.toDate(this.task.previsao_inicio!) : '';
        this.task.previsao_termino = this.task.previsao_termino ? this.toDate(this.task.previsao_termino!) : '';
        this.task.data_inicio = this.task.data_inicio ? this.toDate(this.task.previsao_termino!) : '';
        this.task.data_termino = this.task.data_termino ? this.toDate(this.task.previsao_termino!) : '';
      });

      console.log(this.task_id)
    }

    this.taskForm = this.fb.group({
      titulo: [this.task?.titulo ?? '', Validators.required],
      descricao: [this.task?.descricao ?? '', Validators.required],
      previsao_inicio: [this.task?.descricao ?? ''],
      previsao_termino: [this.task?.descricao ?? ''],
      pevisao_duracao: [this.task?.descricao ?? ''],
      data_inicio: [this.task?.descricao ?? ''],
      data_termino: [this.task?.descricao ?? ''],
      duracao: [this.task?.descricao ?? ''],
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

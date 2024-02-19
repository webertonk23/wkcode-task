import { Component, Input } from '@angular/core';
import { Task } from '../../../../interfaces/Task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input() task_id!: string;
  @Input() titleText: string = ''

  task?: Task = {
    titulo: '',
    descricao: '',
    inicio_previstto: '',
    fim_previsto: '',
    duracao_prevista: '',
    inicio: '',
    fim: '',
    duracao: '',
    status_id: '',
    status: { titulo: '', cor: '' },
    situacao: '',
    pessoa_id: '',
    formulario: '',
  }

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskservice: TasksService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.getTask();

    this.form = this.fb.group({
      titulo: [this.task?.titulo ?? '', Validators.required],
      descricao: [this.task?.descricao ?? '', Validators.required],
      inicio_previstto: [this.task?.inicio_previstto ?? '', Validators.required],
      fim_previsto: [this.task?.fim_previsto ?? '', Validators.required],
      duracao_prevista: [this.task?.duracao_prevista ?? '', Validators.required],
      inicio: [this.task?.inicio ?? ''],
      fim: [this.task?.fim ?? ''],
      duracao: [this.task?.duracao ?? ''],
      status_id: [this.task?.status_id ?? ''],
      situacao: [this.task?.situacao ?? '', Validators.required],
      pessoa_id: [this.task?.pessoa_id ?? '', Validators.required],
      formulario: [this.task?.formulario ?? '', Validators.required],
    });
  }

  private getTask() {
    if (this.task_id) {
      this.taskservice.show(parseInt(this.task_id)).subscribe((result) => {
        this.task = result;
      });
    }
  }

  async salvarTask() {
    const formData = this.form.value;

    if (this.form.invalid) {
      this.toastr.error('Falha!', 'Informações faltando no formulario');
      return;
    }

    try {
      await this.taskservice.create(formData).toPromise();

      this.toastr.success('Sucesso!', 'Task criado com sucesso!');

      this.activeModal.close('success');

    } catch (error) {
      console.error(error);

      this.toastr.error('Falha!', 'Erro ao criar projeto!');
    }
  }

  async editarTask() {
    const formData = this.form.value;

    if (this.form.invalid) {
      this.toastr.error('Falha!', 'Informações faltando no formulario');
      return;
    }

    try {
      await this.taskservice.update(parseInt(this.task_id), formData).toPromise();

      this.toastr.success('Sucesso!', 'Task alterado com sucesso!');

      this.activeModal.close('success');

    } catch (error) {
      console.error(error);

      this.toastr.error('Falha!', 'Erro ao editar projeto!');
    }
  }

}

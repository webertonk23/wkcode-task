import { Component, OnInit } from '@angular/core';
import { Status } from '../../../interfaces/Status';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '../../../services/status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  id!: string;

  status?: Status = {
    titulo: '',
    cor: '',
  };

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private statusService: StatusService,
    private router: Router,
    private AcRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getStatus();

    this.form = this.fb.group({
      titulo: [this.status?.titulo ?? '', Validators.required],
      cor: [this.status?.cor ?? '', Validators.required],
    });
  }

  private getStatus() {
    this.id = this.AcRoute.snapshot.paramMap.get('id')! ?? '';
    if (this.id) {
      this.statusService.show(parseInt(this.id)).subscribe((result) => {
        this.status = result;
      });
    }
  }

  async salvarStatus() {
    const formData = this.form.value;

    if (this.form.invalid) {

      // this.snackBar.open('Falha!', 'Informações faltando no formulario', {
      //   duration: 3000
      // });
      return;
    }

    try {
      await this.statusService.create(formData).toPromise();

      this.toastr.success('Sucesso!', 'Status criado com sucesso!');

      this.router.navigate(['/status']);

    } catch (error) {
      console.error(error);

      // this.snackBar.open('Falha!', 'Erro ao criar pessoa!', {
      //   duration: 3000
      // });
    }
  }

  async editarStatus() {
    const formData = this.form.value;

    if (this.form.invalid) {
      // this.snackBar.open('Falha!', 'Informações faltando no formulario', {
      //   duration: 3000
      // });
      return;
    }

    try {
      await this.statusService.update(parseInt(this.id), formData).toPromise();

      this.toastr.success('Sucesso!', 'Status alterado com sucesso!');

      this.router.navigate([`/status/editar/${this.id}`]);

    } catch (error) {
      console.error(error);

      // this.snackBar.open('Falha!', 'Erro ao editar pessoa!', {
      //   duration: 3000
      // });
    }
  }
}

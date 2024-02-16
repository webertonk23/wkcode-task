import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../../interfaces/Projeto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetosService } from '../../../services/projetos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  id!: string;

  projeto?: Projeto = {
    titulo: '',
    descricao: '',
  };

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projetoService: ProjetosService,
    private router: Router,
    private AcRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getProjeto();

    this.form = this.fb.group({
      titulo: [this.projeto?.titulo ?? '', Validators.required],
      descricao: [this.projeto?.descricao ?? ''],
    });
  }

  private getProjeto() {
    this.id = this.AcRoute.snapshot.paramMap.get('id')! ?? '';
    if (this.id) {
      this.projetoService.show(parseInt(this.id)).subscribe((result) => {
        this.projeto = result;
      });
    }
  }

  async salvarProjeto() {
    const formData = this.form.value;

    if (this.form.invalid) {
      this.toastr.error('Falha!', 'Informações faltando no formulario');
      return;
    }

    try {
      await this.projetoService.create(formData).toPromise();

      this.toastr.success('Sucesso!', 'Projeto criado com sucesso!');

      this.router.navigate(['/projetos']);

    } catch (error) {
      console.error(error);

      this.toastr.error('Falha!', 'Erro ao criar projeto!');
    }
  }

  async editarProjeto() {
    const formData = this.form.value;

    if (this.form.invalid) {
      this.toastr.error('Falha!', 'Informações faltando no formulario');
      return;
    }

    try {
      await this.projetoService.update(parseInt(this.id), formData).toPromise();

      this.toastr.success('Sucesso!', 'Projeto alterado com sucesso!');

      this.router.navigate([`/projetos/editar/${this.id}`]);

    } catch (error) {
      console.error(error);

      this.toastr.error('Falha!', 'Erro ao editar projeto!');
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../inetrfaces/Categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() titleText!: string;
  @Input() painel_id!: number;
  categoria?: Categoria = {
    nome: '',
  };

  form!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
    });
  }

  salvar() {
    const formData = this.form.value;
    formData.painel_id = this.painel_id;

    if (this.form.invalid) {
      return;
    }
    
    try {
      this.categoriaService.createCategoria(formData).subscribe(() => {
        this.activeModal.close('success');
      }, (error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

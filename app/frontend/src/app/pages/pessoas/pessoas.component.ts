import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../../interfaces/Pessoas';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit{
  pessoas?: Pessoas[];

  constructor( 
    private pessoasService: PessoasService
  ) { }

  ngOnInit(): void {
    this.pessoasService.getPessoas().subscribe({
      next: (res) => this.pessoas = res,
      error: (err) => console.log(err),
    })
  }

}

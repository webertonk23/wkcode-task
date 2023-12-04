import { Component, OnInit } from '@angular/core';
import { Painel } from '../inetrfaces/Painel';
import { Equipe } from '../inetrfaces/Equipe';
import { PainelService } from '../services/painel.service';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paineis',
  templateUrl: './paineis.component.html',
  styleUrl: './paineis.component.css'
})
export class PaineisComponent implements OnInit {
  allPaineis: Painel[] = []
  paineis: Painel[] = []

  equipes: Equipe[] = []

  constructor(
    private paineisService: PainelService, 
    private equipesService: EquipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paineisService.getPaineis().subscribe((response) => {
      const data = response.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      })

      this.allPaineis = data;
      this.paineis = data;
    })

    this.equipesService.getEquipes().subscribe((response) => {
      const data = response.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      })

      this.equipes = data;

      console.log(this.equipes);
    })
  }

  pesquisa(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.paineis = this.allPaineis.filter(painel => { 
      return painel.titulo.toLocaleLowerCase().includes(value);
    })
  }

  abrirPainel(id:number){
    this.router.navigate(['/paineis', id]);
  }

  addPainel(equipe_id: number){
    console.log(equipe_id)
  }
}

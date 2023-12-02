import { Component } from '@angular/core';
import { Equipe } from '../../../inetrfaces/Equipe';
import { EquipeService } from '../../../services/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.css'
})
export class EquipesComponent {
  todos: Equipe[] = []
  equipes: Equipe[] = []

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe((response) => {
      const data = response.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      })

      this.todos = data;
      this.equipes = data;
    })   
  }

  pesquisa(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.equipes = this.todos.filter(equipe => { 
      return equipe.nome.toLocaleLowerCase().includes(value);
    })
  }
}

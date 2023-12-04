import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { Painel } from '../../inetrfaces/Painel';
import { PainelService } from '../../services/painel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit{
  painel!: Painel;
  titleModalTask = '';

  constructor(
    private paineisService: PainelService,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.paineisService.getPainel(id).subscribe((item) => (this.painel = item.data));
  }


  // addNovaTask(categoria_id: number) {
  //   const container = this.el.nativeElement.querySelector(`#taskCol${categoria_id}`);

  //   // Cria um novo elemento div
  //   const novoElemento = this.renderer.createElement('div');
  //   this.renderer.addClass(novoElemento, 'card');
  //   this.renderer.addClass(novoElemento, 'card-body');
  //   this.renderer.addClass(novoElemento, 'py-1');
  //   this.renderer.addClass(novoElemento, 'text-center');

  //   // Adiciona o elemento fornecido ao novo elemento
  //   novoElemento.innerHTML = `
  //   <div class="form-group my-2">
  //     <input 
  //       type="text"
  //       class="form-control border-0 w-100 text-center p-0 m-0"
  //       placeholder="nova task" 
  //       [(ngModel)]="newTask"
  //     >
  //   </div>
  //   `;


  //   // Adiciona o novo elemento ao final do container
  //   this.renderer.appendChild(container, novoElemento);

  //   // novoElemento.instance.newTask = this.newTask;

  //   // Vincula manualmente os eventos
  //   this.renderer.listen(novoElemento, 'keyup.enter', () => this.novaTask(this.painel.id!, categoria_id));
  //   this.renderer.listen(novoElemento, 'blur', () => this.novaTask(this.painel.id!, categoria_id));


  // }

  novaTask(painel_id: number, categoria_id: number) {
    
    console.log(painel_id, categoria_id)

    this.titleModalTask = 'Nova Task';
  }
}

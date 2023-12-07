import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Painel } from '../../inetrfaces/Painel';
import { PainelService } from '../../services/painel.service';
import { TaskComponent } from '../task/task.component';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})

export class PainelComponent implements OnInit {
  painel!: Painel;
  titleModalTask = '';

  constructor(
    private paineisService: PainelService,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTasks();
    
  }
  
  getTasks(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
  
    this.paineisService.getPainel(id).subscribe((item) => {
      this.painel = item.data  
    });
  }

  novaTask(painel_id: number, categoria_id: number) {

    const modalRef = this.modalService.open(TaskComponent, { centered: true });
    modalRef.componentInstance.titleText = 'Nova Task';
    modalRef.componentInstance.painel_id = painel_id;
    modalRef.componentInstance.categoria_id = categoria_id;
    
    modalRef.result.then((result) => {
      console.log(result);
      
      if (result === 'success') {
        this.getTasks();
      }
    }).catch((reason) => {
      console.log(`Dismissed with reason: ${reason}`);
    });
  }

  addCat(painel_id: number){
    const modalRef = this.modalService.open(CategoriaComponent, { centered: true });
    modalRef.componentInstance.titleText = 'Nova categoria';
    modalRef.componentInstance.painel_id = painel_id;
    
    modalRef.result.then((result) => {
      console.log(result);
      
      if (result === 'success') {
        this.getTasks();
      }
    }).catch((reason) => {
      console.log(`Dismissed with reason: ${reason}`);
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from '../pages/compartilhado/components.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ComponentsModule
  ]
})
export class LayoutModule { }

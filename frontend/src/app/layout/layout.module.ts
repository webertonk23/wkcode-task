import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from '../pages/compartilhado/components.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../services/interceptors/loading.interceptor';


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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './servicos/loading.service';
import { LoadingComponent } from './parts/loading/loading.component';

import { ToastComponent } from './parts/toast/toast.component';

import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ToastComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PessoasModule
  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

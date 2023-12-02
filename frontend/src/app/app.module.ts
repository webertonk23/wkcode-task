import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/part/sidebar/sidebar.component';
import { NavbarComponent } from './components/part/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PaineisComponent } from './components/pages/paineis/paineis.component';
import { EquipesComponent } from './components/pages/equipes/equipes.component';
import { TableComponent } from './components/part/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    PaineisComponent,
    EquipesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

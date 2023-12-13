import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/part/sidebar/sidebar.component';
import { NavbarComponent } from './components/part/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EquipesComponent } from './components/pages/equipes/equipes.component';
import { PaineisModule } from './paineis/paineis.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    EquipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaineisModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

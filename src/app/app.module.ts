import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { StadiumsComponent } from './stadiums/stadiums.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaisesComponent,
    GroupsComponent,
    StadiumsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

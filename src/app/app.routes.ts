import { PaisesComponent } from './paises/paises.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';



// Route Configuration
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stadiums', component: StadiumsComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'groups', component: GroupsComponent },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EstadosComponent } from './components/estados/estados.component';
import { RolesComponent } from './components/roles/roles.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'alquiler', component: AlquilerComponent},
  {path: 'categorias', component:CategoriasComponent },
  {path: 'estados', component: EstadosComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'usuarios', component: UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

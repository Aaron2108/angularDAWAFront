import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RolesComponent } from './components/roles/roles.component';
import { EstadosComponent } from './components/estados/estados.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    AlquilerComponent,
    SolicitudesComponent,
    CategoriasComponent,
    RolesComponent,
    EstadosComponent,
    UsuariosComponent,
    NavmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

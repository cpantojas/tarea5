import { TodominusculaModule } from 'src/app/pipes/todominuscula/todominuscula.module';
import { DirectivesModule } from './../../../../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: InicioSesionComponent }
    ]),
    DirectivesModule,
    TodominusculaModule
  ]
})
export class InicioSesionModule { }

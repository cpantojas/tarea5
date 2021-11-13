import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodominusculaPipe } from './todominuscula.pipe';



@NgModule({
  declarations: [
    TodominusculaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodominusculaPipe
  ]
})
export class TodominusculaModule { }

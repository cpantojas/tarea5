import { TodominusculaPipe } from './../../pipes/todominuscula/todominuscula.pipe';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Todominusculas]'
})
export class TodominusculasDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyUp($event: any) {
    console.log('key.up', $event.key, $event.target.value);
    const textoAnterior = $event.target.value;
    const textoNuevo = (new TodominusculaPipe()).transform(textoAnterior);
    console.log('textoNuevo', textoNuevo);
    this.elementRef.nativeElement.value = textoNuevo;
  }

}

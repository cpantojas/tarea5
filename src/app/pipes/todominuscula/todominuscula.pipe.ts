import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todominuscula'
})
export class TodominusculaPipe implements PipeTransform {

  transform(texto: string): string {
    if (typeof(texto)==='string') {
      console.log('pipeminuscula'+texto);
      return texto.toLowerCase();
    }
    else{
      console.log('pipeminuscula'+texto);
      return texto;
    }
  }

}

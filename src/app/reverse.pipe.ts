import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let newstring = value
    if (args[0]) { // i want a fullstop
      newstring += "."
    }
    if (args[1] === "singlequote") {
      newstring = "'" + newstring
    }
    return newstring
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    return (value.toString().length < 2)? '0'+ value.toString(): value.toString();
  }

}

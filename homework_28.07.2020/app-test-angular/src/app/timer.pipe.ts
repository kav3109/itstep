import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string{
    return (Math.round(value/1000)).toString() + "sec.";
  }

}

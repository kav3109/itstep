import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash'
})
export class DashPipe implements PipeTransform {

  transform(value: string, pos: string = ''): string {
    return value.toString().split(pos).join('+');
  }

}

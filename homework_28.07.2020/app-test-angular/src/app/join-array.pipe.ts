import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure: false
})
export class JoinArrayPipe implements PipeTransform {

  transform(arr: string[], ...args: any[]): string {
    return arr.join(', ');
  }

}

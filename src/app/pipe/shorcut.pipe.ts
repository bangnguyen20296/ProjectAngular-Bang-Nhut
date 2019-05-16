import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorcut'
})
export class ShorcutPipe implements PipeTransform {

  transform(value: any): any {
    return value.subtr(0, 10) + '...';
  }

}

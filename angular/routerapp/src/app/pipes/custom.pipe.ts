import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: number ): string {
    let data = ''
    let fstCh = value.charAt(args).toUpperCase()
    data = fstCh + value.substr(args)
    return data;
  }
}

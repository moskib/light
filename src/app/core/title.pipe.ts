import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return null;

    return value.replace(/\W/g, ' ');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseText',
  standalone: true
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value.toUpperCase()
  }
}

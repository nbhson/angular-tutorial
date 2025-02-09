import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency',
  standalone: true
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return new Intl.NumberFormat('vi-vn', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(Number(value));
  }

}

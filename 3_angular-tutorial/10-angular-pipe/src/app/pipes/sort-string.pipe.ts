import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString',
})
export class SortStringPipe implements PipeTransform {
  transform(products: Product[], ...args: any[]): Product[] {
    if (args[0] === 'name') {
      products.sort((a, b) => {
        if (a.name > b.name) return args[1];
        else if (a.name < b.name) return -args[1];
        else return 0;
      });
    }

    if (args[0] === 'price') {
      products.sort((a, b) => {
        if (a.prices > b.prices) return args[1];
        else if (a.prices < b.prices) return -args[1];
        else return 0;
      });
    }

    return [...products];
  }
}

interface Product {
  id: number;
  name: string;
  prices: number;
  status: boolean;
}

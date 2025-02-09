import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(products: Product[], ...args: any[]): Product[] {
    if (!args[0] && !args[1] && !args[2] && !args[3]) {
      return products;
    } else {
      if (args[0]) {
        products = products.filter(x => {
          return x.id.toString().indexOf(args[0]) !== -1
        })
      }
      if (args[1]) {
        products = products.filter(x => {
          return x.name.toLowerCase().indexOf(args[1].toLowerCase()) !== -1
        })
      }
      if (args[2]) {
        products = products.filter(x => {
          return x.prices.toString().indexOf(args[2]) !== -1
        })
      }
      if (args[3]) {
        products = products.filter(x => {
          return x.status.toString().toLowerCase().indexOf(args[3].toLowerCase()) !== -1
        })
      }

      return products;
    }
  }

}

interface Product {
  id: number,
  name: string,
  prices: number,
  status: boolean
}

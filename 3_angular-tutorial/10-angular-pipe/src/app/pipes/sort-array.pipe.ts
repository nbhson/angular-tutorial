import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(arrNumber: number[], ...args: number[]): Array<number> {
    arrNumber.sort((a,b) => {
      if (a > b) return 1
      else if (a < b) return -1
      else return 0
    })

    if (args[0] === -1) {
      arrNumber.reverse()
    }

    return [...arrNumber];
  }

}

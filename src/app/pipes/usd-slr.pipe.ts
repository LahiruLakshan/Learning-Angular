import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdSlr'
})
export class UsdSlrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price, x] = args;
    return value*price;
  }

}

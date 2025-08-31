import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
     transform(value: number): string {
        let arr = []
        const str = value.toString()
        for (let i = 0; i < str.length; i += 4) {
          arr.push(str.slice(i, i + 4))
        }
        return arr.join(' - ')
    }
  }


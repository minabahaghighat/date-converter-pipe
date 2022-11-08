import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'shamsiToMiladi'
})
export class ShamsiToMiladiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   return moment.from(value, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
  }

}

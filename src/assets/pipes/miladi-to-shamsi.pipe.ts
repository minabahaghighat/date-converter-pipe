import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'miladitoShamsi'
})
export class MiladiToShamsiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = moment(value);
    if (args === "withTime") {
    return date.locale('fa').format(' HH:mm');      
    }
    return date.locale('fa').format('YYYY/MM/DD');
  }


}

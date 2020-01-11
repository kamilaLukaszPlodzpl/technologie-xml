import { Pipe, PipeTransform } from '@angular/core';
import { Date} from '../model/model';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date): string {
    return date.day +" "+ date.month+" "+ date.year;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContact'
})
export class SearchContactPipe implements PipeTransform {

  transform(data, variable): any {
    if (!data)
      return null;

    return data.filter(x => {
      return (
        x['name'].toLowerCase().includes(variable.toLowerCase()) ||
        x['mobile'].toLowerCase().includes(variable.toLowerCase())
      )
    });
  }

}

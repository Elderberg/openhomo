import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class NamePipe implements PipeTransform {

  transform(values: any[], type?: string): any[] {
    if (type && type == SortTypes.ID) {
      return this.sortById(values)
    }
    return values.sort((a, b) => a.name.localeCompare(b.lastname));
  }

  sortById(values) {
    return values.sort((a, b) => a.id.localeCompare(b.id));
  }
}

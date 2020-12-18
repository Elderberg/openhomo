import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExplorerHelperService {

  constructor() { }


  // merges objects recursively
  mergeObjects = (target: any, source: any) => {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object) Object.assign(source[key], this.mergeObjects(target[key], source[key]))
    }
    Object.assign(target || {}, source)
    return target
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  readonly STORAGE_URL = environment.storageUrl;

  transform(image: string): string {
    
    let res = image.replace('public', '')
    return this.STORAGE_URL+res;
  }

}

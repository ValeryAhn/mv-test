import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {
  constructor(private appConfig: AppConfigService) {}

  transform(value: string): string {
    const excerptLength = Number(this.appConfig.excerptLength) || 250;
    const endOfString = value.length > excerptLength ? '...' : '';
    return `${value.substring(0, excerptLength)}${endOfString}`;
  }

}

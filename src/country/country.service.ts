import { HttpService, Injectable } from '@nestjs/common';

// tslint:disable-next-line
import { pluck } from 'rxjs/operators';

@Injectable()
export class CountryService {
  private readonly DATA_SOURCE = 'https://restcountries.eu/rest/v2/all';

  constructor(private readonly httpService: HttpService) {}

  public async getCountries() {
    return this.httpService.get(this.DATA_SOURCE).pipe(pluck('data'));
  }
}

import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Country } from '../graphql.schema';

@Injectable()
export class CountryService {
  private readonly COUNTRY_SOURCE = 'https://restcountries.eu/rest/v2/all';

  constructor(private readonly httpService: HttpService) {}

  public async getCountries(): Promise<Observable<Country[]>> {
    return this.httpService.get(this.COUNTRY_SOURCE).pipe(pluck('data'));
  }
}

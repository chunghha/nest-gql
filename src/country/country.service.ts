import { HttpService, Injectable } from '@nestjs/common';

import { Country } from '../models/country.model';

@Injectable()
export class CountryService {
  private readonly DATA_SOURCE = 'https://restcountries.eu/rest/v2/all';
  private countries: Country[] = [];

  constructor(private readonly httpService: HttpService) {}

  public async getCountries() {
    await this.httpService.get(this.DATA_SOURCE).subscribe(res => {
      this.countries = res.data;
    });

    return this.countries;
  }
}

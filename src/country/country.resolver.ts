import { Query, Resolver } from '@nestjs/graphql';

import { CountryService } from './country.service';

@Resolver('Country')
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query('countries')
  public async countries() {
    return this.countryService.getCountries();
  }
}

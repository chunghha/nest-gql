import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

import { Country } from '../graphql.schema';
import { CountryService } from './country.service';

@Resolver('Country')
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query('countries')
  public async countries(): Promise<Observable<Country[]>> {
    return this.countryService.getCountries();
  }
}

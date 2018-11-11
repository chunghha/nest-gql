// tslint:disable-next-line
import { Module, HttpModule } from '@nestjs/common';

import { CountryResolvers } from './country.resolvers';
import { CountryService } from './country.service';

@Module({
  imports: [HttpModule],
  providers: [CountryResolvers, CountryService],
})
export class CountryModule {}

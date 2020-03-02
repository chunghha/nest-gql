import { Module, HttpModule } from '@nestjs/common';

import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  imports: [HttpModule],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}

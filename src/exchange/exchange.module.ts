import { HttpModule, Module } from '@nestjs/common';

import { ExchangeResolver } from './exchange.resolver';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [HttpModule],
  providers: [ExchangeResolver, ExchangeService],
})
export class ExchangeModule {}

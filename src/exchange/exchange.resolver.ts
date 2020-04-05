import { Args, Query, Resolver } from '@nestjs/graphql';
import { AsyncSubject } from 'rxjs';

import { Exchange } from '../models/exchage.model';
import { CURRENCIES } from './currencies';
import { ExchangeService } from './exchange.service';

@Resolver('Exchange')
export class ExchangeResolver {
  private exchangeRate$: AsyncSubject<Exchange>;

  constructor(private readonly exchangeService: ExchangeService) {}

  @Query('exchangeRate')
  public async exchangeRate(@Args('base') base: string) {
    /* eslint-disable-next-line no-console */
    console.log(`Base Currency: ${base}`);

    this.exchangeRate$ = new AsyncSubject<Exchange>();
    const exchangeRate: Exchange = {};

    (await this.exchangeService.getExchangeRates(base)).subscribe((res) => {
      exchangeRate.date = res.date;
      exchangeRate.base = res.base;
      CURRENCIES.map((currency) => {
        exchangeRate[currency] = res.rates[currency] as number;
      });

      this.exchangeRate$.next(exchangeRate);
      this.exchangeRate$.complete();
    });

    return this.exchangeRate$;
  }
}

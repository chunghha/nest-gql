import { Args, Query, Resolver } from '@nestjs/graphql';
import { AsyncSubject } from 'rxjs';

import { Exchange } from '../graphql.schema';
import { CURRENCIES } from './currencies';
import { ExchangeRates, ExchangeResponse } from './exchange.model';
import { ExchangeService } from './exchange.service';

@Resolver('Exchange')
export class ExchangeResolver {
  private exchangeRate$: AsyncSubject<Exchange>;

  constructor(private readonly exchangeService: ExchangeService) {}

  @Query('exchangeRate')
  public async exchangeRate(
    @Args('base') base: string,
  ): Promise<AsyncSubject<Exchange>> {
    /* eslint-disable-next-line no-console */
    console.log(`Base Currency: ${base}`);

    this.exchangeRate$ = new AsyncSubject<Exchange>();
    const exchangeRate: Exchange = {};

    (await this.exchangeService.getExchangeRates(base)).subscribe(
      (res: ExchangeResponse) => {
        exchangeRate.date = res.date;
        exchangeRate.base = res.base;
        const rates = res.rates as ExchangeRates;
        CURRENCIES.map((currency) => {
          exchangeRate[currency] = rates[currency];
        });

        this.exchangeRate$.next(exchangeRate);
        this.exchangeRate$.complete();
      },
    );

    return this.exchangeRate$;
  }
}

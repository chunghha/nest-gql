import { HttpService, Injectable } from '@nestjs/common';

import { pluck } from 'rxjs/operators';

@Injectable()
export class ExchangeService {
  private readonly EXCHANGE_SOURCE =
    'https://api.exchangeratesapi.io/latest?base=';

  constructor(private readonly httpService: HttpService) {}

  public async getExchangeRates(base: string) {
    return this.httpService
      .get(`${this.EXCHANGE_SOURCE}${base}`)
      .pipe(pluck('data'));
  }
}

import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { ExchangeResponse } from './exchange.model';

@Injectable()
export class ExchangeService {
  private readonly EXCHANGE_SOURCE = 'https://api.frankfurter.app/latest?base=';

  constructor(private readonly httpService: HttpService) {}

  public async getExchangeRates<T = ExchangeResponse>(
    base: string,
  ): Promise<Observable<T>> {
    return this.httpService
      .get(`${this.EXCHANGE_SOURCE}${base}`)
      .pipe(pluck('data'));
  }
}

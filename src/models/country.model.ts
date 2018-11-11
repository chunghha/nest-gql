import { Bloc } from './bloc.model';
import { Currency } from './currency.model';
import { Language } from './language.model';
import { Translation } from './translation.model';

export class Country {
  public name?: string;
  public topLevelDomain?: [string];
  public alpha2Code?: string;
  public alpha3Code?: string;
  public callingCodes?: [string];
  public capital?: string;
  public altSpellings?: [string]
  public region?: string;
  public subregion?: string;
  public population?: number;
  public latlng?: [number];
  public demonym?: string;
  public area?: number;
  public gini?: number;
  public timezones?: [string];
  public borders?: [string];
  public nativeName?: string;
  public numericCode?: string;
  public currencies?: [Currency];
  public languages?: [Language];
  public translations?: Translation;
  public reginalBlocs?: [Bloc];
  public flag?: string;
  public cioc?: string;
}

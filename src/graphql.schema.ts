/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Bloc {
  acronym?: string;
  name?: string;
  otherAcronyms?: string[];
  otherNames?: string[];
}

export interface Country {
  name?: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  gini?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  currencies?: Currency[];
  languages?: Language[];
  translations?: Translation;
  reginalBlocs?: Bloc[];
  flag?: string;
  cioc?: string;
}

export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface Exchange {
  base?: string;
  date?: string;
  AUD?: number;
  BGN?: number;
  BRL?: number;
  CAD?: number;
  CHF?: number;
  CNY?: number;
  CZK?: number;
  DKK?: number;
  EUR?: number;
  GBP?: number;
  HKD?: number;
  HRK?: number;
  HUF?: number;
  IDR?: number;
  ILS?: number;
  ISK?: number;
  JPY?: number;
  KRW?: number;
  MYR?: number;
  MXN?: number;
  NOK?: number;
  NZD?: number;
  PHP?: number;
  PLN?: number;
  RON?: number;
  RUB?: number;
  SEK?: number;
  SGD?: number;
  THB?: number;
  TRY?: number;
  USD?: number;
  ZAR?: number;
}

export interface Language {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
}

export interface IQuery {
  countries(): Country[] | Promise<Country[]>;
  exchangeRate(base: string): Exchange | Promise<Exchange>;
}

export interface Translation {
  de?: string;
  es?: string;
  fr?: string;
  ja?: string;
  it?: string;
  br?: string;
  pt?: string;
  nl?: string;
  hr?: string;
  fa?: string;
}

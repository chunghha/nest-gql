/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Bloc {
  acronym?: Nullable<string>;
  name?: Nullable<string>;
  otherAcronyms?: Nullable<Nullable<string>[]>;
  otherNames?: Nullable<Nullable<string>[]>;
}

export interface Country {
  name?: Nullable<string>;
  topLevelDomain?: Nullable<Nullable<string>[]>;
  alpha2Code?: Nullable<string>;
  alpha3Code?: Nullable<string>;
  callingCodes?: Nullable<Nullable<string>[]>;
  capital?: Nullable<string>;
  altSpellings?: Nullable<Nullable<string>[]>;
  region?: Nullable<string>;
  subregion?: Nullable<string>;
  population?: Nullable<number>;
  latlng?: Nullable<Nullable<number>[]>;
  demonym?: Nullable<string>;
  area?: Nullable<number>;
  gini?: Nullable<number>;
  timezones?: Nullable<Nullable<string>[]>;
  borders?: Nullable<Nullable<string>[]>;
  nativeName?: Nullable<string>;
  numericCode?: Nullable<string>;
  currencies?: Nullable<Nullable<Currency>[]>;
  languages?: Nullable<Nullable<Language>[]>;
  translations?: Nullable<Translation>;
  reginalBlocs?: Nullable<Nullable<Bloc>[]>;
  flag?: Nullable<string>;
  cioc?: Nullable<string>;
}

export interface Currency {
  code?: Nullable<string>;
  name?: Nullable<string>;
  symbol?: Nullable<string>;
}

export interface Exchange {
  base?: Nullable<string>;
  date?: Nullable<string>;
  AUD?: Nullable<number>;
  BGN?: Nullable<number>;
  BRL?: Nullable<number>;
  CAD?: Nullable<number>;
  CHF?: Nullable<number>;
  CNY?: Nullable<number>;
  CZK?: Nullable<number>;
  DKK?: Nullable<number>;
  EUR?: Nullable<number>;
  GBP?: Nullable<number>;
  HKD?: Nullable<number>;
  HRK?: Nullable<number>;
  HUF?: Nullable<number>;
  IDR?: Nullable<number>;
  ILS?: Nullable<number>;
  ISK?: Nullable<number>;
  JPY?: Nullable<number>;
  KRW?: Nullable<number>;
  MYR?: Nullable<number>;
  MXN?: Nullable<number>;
  NOK?: Nullable<number>;
  NZD?: Nullable<number>;
  PHP?: Nullable<number>;
  PLN?: Nullable<number>;
  RON?: Nullable<number>;
  RUB?: Nullable<number>;
  SEK?: Nullable<number>;
  SGD?: Nullable<number>;
  THB?: Nullable<number>;
  TRY?: Nullable<number>;
  USD?: Nullable<number>;
  ZAR?: Nullable<number>;
}

export interface Language {
  iso639_1?: Nullable<string>;
  iso639_2?: Nullable<string>;
  name?: Nullable<string>;
  nativeName?: Nullable<string>;
}

export interface IQuery {
  countries():
    | Nullable<Nullable<Country>[]>
    | Promise<Nullable<Nullable<Country>[]>>;
  exchangeRate(base: string): Nullable<Exchange> | Promise<Nullable<Exchange>>;
}

export interface Translation {
  de?: Nullable<string>;
  es?: Nullable<string>;
  fr?: Nullable<string>;
  ja?: Nullable<string>;
  it?: Nullable<string>;
  br?: Nullable<string>;
  pt?: Nullable<string>;
  nl?: Nullable<string>;
  hr?: Nullable<string>;
  fa?: Nullable<string>;
}

type Nullable<T> = T | null;

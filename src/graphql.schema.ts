
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Bloc {
    acronym?: string;
    name?: string;
    otherAcronyms?: string[];
    otherNames?: string[];
}

export class Country {
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

export class Currency {
    code?: string;
    name?: string;
    symbol?: string;
}

export class Language {
    iso639_1?: string;
    iso639_2?: string;
    name?: string;
    nativeName?: string;
}

export abstract class IQuery {
    abstract countries(): Country[] | Promise<Country[]>;
}

export class Translation {
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

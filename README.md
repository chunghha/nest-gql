
## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# production mode
$ yarn start:prod

# run in Docker
$ sh run.sh
```


## Sample Query

```
{
  countries {
    name
    topLevelDomain
    alpha2Code
    alpha3Code
    capital
    population
    subregion
    area
    gini
    flag
    currencies {
      name
      symbol
    }
    borders
    latlng
    languages {
      name
      nativeName
    }
    translations {
      de
      es
      fr
    }
    timezones
  }
}
```

## REST API

https://github.com/apilayer/restcountries/
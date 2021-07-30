import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  controllers: [AppController],
  imports: [
    CountryModule,
    ExchangeModule,
    GraphQLFederationModule.forRoot({
      debug: false,
      definitions: {
        outputAs: 'interface',
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
      installSubscriptionHandlers: false,
      // playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}

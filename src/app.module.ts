import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';

@Module({
  controllers: [AppController],
  imports: [
    CountryModule,
    GraphQLModule.forRoot({
      debug: false,
      definitions: {
        outputAs: 'class',
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
      installSubscriptionHandlers: true,
      playground: true,
      typePaths: ['./**/*.gql'],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}

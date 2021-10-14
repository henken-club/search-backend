import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { GraphQLFederationModule } from "@nestjs/graphql";

import { AppConfig } from "./app.config";
import { SearchResolverModule } from "./search/search.resolver.module";

@Module({
  imports: [
    GraphQLFederationModule.forRootAsync({
      imports: [ConfigModule.forFeature(AppConfig)],
      inject: [AppConfig.KEY],
      useFactory: (config: ConfigType<typeof AppConfig>) => ({
        ...config.graphql,
      }),
    }),
    SearchResolverModule,
  ],
})
export class AppModule {}

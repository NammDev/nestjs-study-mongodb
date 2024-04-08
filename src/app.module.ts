import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // save the schema in a memory & regenerate it on each start
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

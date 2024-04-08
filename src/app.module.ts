import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // save the schema in a memory & regenerate it on each start
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(4)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
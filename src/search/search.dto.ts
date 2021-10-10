import {ArgsType, Field, Int, ObjectType} from '@nestjs/graphql';

import {SearchResultEntity} from './search.entities';

@ArgsType()
export class SearchArgs {
  @Field(() => String)
  query!: string;

  @Field(() => Int, {nullable: true, defaultValue: 0})
  first!: number;

  @Field(() => Int)
  limit!: number;
}

@ObjectType()
export class SearchPayload {
  @Field(() => [SearchResultEntity])
  nodes!: SearchResultEntity[];
}

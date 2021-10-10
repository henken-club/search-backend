import {Args, Resolver, Query} from '@nestjs/graphql';

import {SearchArgs, SearchPayload} from './search.dto';
import {SearchResultEntity} from './search.entities';
import {SearchService} from './search.service';

@Resolver(() => SearchResultEntity)
export class SearchResolver {
  constructor(private readonly service: SearchService) {}

  @Query((type) => SearchPayload, {name: 'search'})
  async search(@Args() args: SearchArgs): Promise<SearchPayload> {
    const result = await this.service.search(args);
    return {nodes: result.map(({id, type}) => ({content: {id, type}}))};
  }
}

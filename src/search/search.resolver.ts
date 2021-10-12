import {Args, Resolver, Query} from '@nestjs/graphql';

import {
  SearchContentsArgs,
  SearchContentsPayload,
} from './dto/search-contents.dto';
import {SearchResultEntity} from './search.entities';
import {SearchService} from './search.service';

@Resolver(() => SearchResultEntity)
export class SearchResolver {
  constructor(private readonly service: SearchService) {}

  @Query((type) => SearchContentsPayload, {name: 'searchContents'})
  async searchContents(
    @Args() args: SearchContentsArgs,
  ): Promise<SearchContentsPayload> {
    const result = await this.service.search(args);
    return {nodes: result.map(({id, type}) => ({content: {id, type}}))};
  }
}

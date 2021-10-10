import {Injectable} from '@nestjs/common';

import {ContentType} from '~/content/content.entities';

@Injectable()
export class SearchService {
  constructor() {}

  async search({
    query,
    first,
    limit,
  }: {
    query: string;
    first: number;
    limit: number;
  }): Promise<{id: string; type: ContentType}[]> {
    return [];
  }
}

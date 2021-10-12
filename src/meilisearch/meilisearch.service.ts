import {Injectable} from '@nestjs/common';

@Injectable()
export class MeiliSearchService {
  constructor() {}

  async addDocument<T>(index: string, document: T) {}
}

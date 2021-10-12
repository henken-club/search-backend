import {Injectable} from '@nestjs/common';

@Injectable()
export class UpserterService {
  constructor() {}

  async insertAuthor(data: {id: string; name: string}): Promise<void> {}
  async insertBook(data: {id: string; title: string}): Promise<void> {}
  async insertBookSeries(data: {id: string; title: string}): Promise<void> {}
}

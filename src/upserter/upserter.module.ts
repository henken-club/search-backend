import {Module} from '@nestjs/common';

import {UpserterController} from './upserter.contoller';
import {UpserterService} from './upserter.service';

@Module({
  imports: [],
  controllers: [UpserterController],
  providers: [UpserterService],
  exports: [UpserterService],
})
export class UpserterModule {}

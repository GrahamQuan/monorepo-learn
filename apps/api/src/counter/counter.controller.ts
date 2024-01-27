import { Controller, Get, Patch, Param, Query } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Query('action') action: string) {
    return this.counterService.update(id, action);
  }
}

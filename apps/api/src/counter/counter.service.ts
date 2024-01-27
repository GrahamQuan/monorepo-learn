import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CounterService {
  constructor(private readonly prisma: PrismaService) {}

  // id: 20be393e-dce8-455a-9413-8c073b0eb08b
  findOne(id: string) {
    return this.prisma.counter.findFirst({
      where: { id },
    });
  }

  async update(id: string, action: string) {
    const counter = await this.prisma.counter.findFirst({
      where: { id },
    });
    if (!counter) throw new NotFoundException(`counter not found`);

    if (action === 'add') {
      return this.prisma.counter.update({
        where: {
          id,
        },
        data: {
          counter: counter.counter + 1,
        },
      });
    }
    if (action === 'sub') {
      return this.prisma.counter.update({
        where: {
          id,
        },
        data: {
          counter: counter.counter - 1,
        },
      });
    }
  }
}

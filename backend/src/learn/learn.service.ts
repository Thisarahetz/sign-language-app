import { Inject, Injectable } from '@nestjs/common';
import { CreateLearnDto } from './dto/create-learn.dto';
import { UpdateLearnDto } from './dto/update-learn.dto';
import { PG_CONNECTION } from '@/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/database/schema';

@Injectable()
export class LearnService {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}
  async create(createLearnDto: CreateLearnDto) {
    try {
      const { title, overview, category, icon } = createLearnDto;

      const result = await this.conn
        .insert(schema.module)
        .values({
          title,
          overview,
          category,
          icon,
        })
        .returning({
          insertedId: schema.module.id,
          title: schema.module.title,
          overview: schema.module.overview,
          category: schema.module.category,
          icon: schema.module.icon,
          createdAt: schema.module.createdAt,
          updatedAt: schema.module.updatedAt,
        })
        .execute();

      return {
        status: true,
        message: 'Module created successfully',
        data: result,
      };
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const result = await this.conn
        .select({
          id: schema.module.id,
          title: schema.module.title,
          overview: schema.module.overview,
          category: schema.module.category,
          icon: schema.module.icon,
          createdAt: schema.module.createdAt,
          updatedAt: schema.module.updatedAt,
        })
        .from(schema.module)
        .execute();

      return {
        status: true,
        message: 'Module fetched successfully',
        data: result,
      };
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} learn`;
  }

  update(id: number, updateLearnDto: UpdateLearnDto) {
    return `This action updates a #${id} learn`;
  }

  remove(id: number) {
    return `This action removes a #${id} learn`;
  }
}

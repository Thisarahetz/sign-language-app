import { Inject, Injectable } from '@nestjs/common';
import { CreateLearnDto } from './dto/create-learn.dto';
import { UpdateLearnDto } from './dto/update-learn.dto';
import { PG_CONNECTION } from '@/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/database/schema';
import { CreateResourcesDto } from './dto/create-resouces.dto';
import { eq } from 'drizzle-orm';

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
      let result = await this.conn
        .select({
          id: schema.module.id,
          title: schema.module.title,
          overview: schema.module.overview,
          category: schema.module.category,
          icon: schema.module.icon,
          createdAt: schema.module.createdAt,
          updatedAt: schema.module.updatedAt,
          resource:{
            id: schema.resource.id,
            name: schema.resource.name,
            overview: schema.resource.overview,
            video: schema.resource.video,
            review: schema.resource.review,
            module_id: schema.resource.module_id,
            createdAt: schema.resource.createdAt,
            updatedAt: schema.resource.updatedAt,
          }
          
        })
        .from(schema.module)
        .leftJoin(
          schema.resource,
          eq(schema.module.id, schema.resource.module_id),
        )
        .execute();


        // Grouping the data
        const groupedData = result.reduce((acc, item) => {
          const existingModule = acc.find(module => module.id === item.id);
          
          if (existingModule) {
            existingModule.resource.push(item.resource);
          } else {
            acc.push({
              ...item,
              resource: [item.resource]
            });
          }
          
          return acc;
        }, []);



        // Grouping the data by category
        const categoryGroupedData = groupedData.reduce((acc, item) => {
          const existingCategory = acc.find(module => module.category === item.category);
          
          if (existingCategory) {
            existingCategory.module.push(item);
          } else {
            acc.push({
              category: item.category,
              module: [item]
            });
          }
          
          return acc;
        }
        , []);


      return {
        status: true,
        message: 'Module fetched successfully',
        data: categoryGroupedData,
      };
    } catch (error) {
      return error;
    }
  }

  async createResources(createLearnDto: CreateResourcesDto, id: number) {
    try {
      const { name, overview, video } = createLearnDto;

      const result = await this.conn
        .insert(schema.resource)
        .values({
          name,
          overview,
          video,
          module_id: id,
        })
        .returning({
          insertedId: schema.resource.id,
          name: schema.resource.name,
          overview: schema.resource.overview,
          video: schema.resource.video,
          review: schema.resource.review,
          module_id: schema.resource.module_id,
          createdAt: schema.resource.createdAt,
          updatedAt: schema.resource.updatedAt,
        })
        .execute();

      

      return {
        status: true,
        message: 'Resource created successfully',
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

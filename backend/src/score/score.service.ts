import { Inject, Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PG_CONNECTION } from '@/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ScoreService {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}
  create(createScoreDto: CreateScoreDto, userId: number) {
    try {
      const { score, history ,status ,total_time_spent} = createScoreDto;

      const scoreData = {
        user_id: userId,
        score: score,
        history: history,
        status: status,
        total_time_spent: total_time_spent,
      };

      return this.conn.insert(schema.score).values(scoreData).execute();
    } catch (error) {
      throw error;
    }
  }

  async findAllScoreByUser(userId: number) {
    try {
      //check if user exists
      const userExists = await this.conn
        .select()
        .from(schema.user)  
        .where(eq(schema.user.id, userId))
        .execute();

      if (userExists.length === 0) {
        throw new Error('User not found');
      }

      const data = await this.conn
        .select()
        .from(schema.score)
        .where(eq(schema.score.user_id, userId))
        .execute();

      return {
        status: 200,
        message: 'Scores fetched successfully',
        data: data,
      };

    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} score`;
  }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}

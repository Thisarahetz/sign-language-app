import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PG_CONNECTION } from '@/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/database/schema';
import { NewUser } from '@/database/schema/user';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
 
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const _user = {
        email: createUserDto.email,
        role: 'user',
        username: createUserDto.first_name + ' ' + createUserDto.last_name,
        password: createUserDto.password,
      };

      //if user already exists
      const userExists = await this.conn
        .select()
        .from(schema.user)
        .where(eq(schema.user.email, _user.email))
        .execute();

      if (userExists.length > 0)
        throw new BadRequestException('User already exists');

      await this.conn.insert(schema.user).values(_user).execute();

      return {
        status: 201,
        message: 'User created successfully',
        data: _user,
      };
    } catch (error) {
      throw error;
    }
  }

  async validateUser(
    email: string,
    password: string

  ){
    try {
      const user = await this.conn
        .select()
        .from(schema.user)
        .where(eq(schema.user.email, email))
        .execute();

      if (user.length === 0) {
        throw new BadRequestException('User not found');
      }

      if (user[0].password !== password) {
        throw new BadRequestException('Invalid password');
      }

      return user[0];
      
    } catch (error) {
      throw error;
      
    }
  }

  validateSocialUser(email: any, user_id: any): any {
    try {
      return this.conn
        .select()
        .from(schema.user)
        .where(eq(schema.user.email, email))
        .execute();
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

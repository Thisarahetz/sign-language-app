import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PG_CONNECTION } from 'src/constants';
import * as schema from 'src/database/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { UserService } from '@/user/user.service';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { JwtPayload } from '@/utility/interface';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants, refreshTokenConstants } from '@/utility/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PG_CONNECTION) private conn: PostgresJsDatabase<typeof schema>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(req: any) {
    try {
      const { user } = req;

      //if user is exist
      if (!user) {
        throw new UnauthorizedException('User not found with this credentials');
      }

      user as JwtPayload;

      //generate access token
      const token = await this.generateAccessToken(user);

      return {
        status: 200,
        message: 'Login successful',
        data: {
          ...user,
          access_token: token.access_token,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async generateAccessToken(jwtPayload: JwtPayload): Promise<any> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: refreshTokenConstants.secret,
        expiresIn: refreshTokenConstants.expiresIn,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
  create(createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  validateUser(arg0: {
    email: any;
    password: any;
    is_social: any;
    user_id: any;
  }): any {
    try {
      if (arg0.is_social) {
        return this.userService.validateSocialUser(arg0.email, arg0.user_id);
      }
      return this.userService.validateUser(arg0.email, arg0.password);
    } catch (error) {}
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger();
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    });
  }

  async validate(req, phone_number, password, done): Promise<any> {
    try {
      const { email, password, is_social, user_id } = req.body;

      let user = null;

      if (is_social) {
        if (!email) throw new BadRequestException('Email is required');

        if (!user_id) throw new BadRequestException('User id is required');
      } else {
        if (!email) throw new BadRequestException('Phone number is required');

        if (!password) throw new BadRequestException('Password is required');
      }

      user = await this.authService.validateUser({
        email,
        password,
        is_social,
        user_id,
      });

      return user
        ? {
            id: user.id,
            email: user.email,
            role: user.role,
          }
        : false;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

import env from '@/env';

export const jwtConstants = {
  secret: env.JWT_SECRET,
  expiresIn: '1d',
};

export const refreshTokenConstants = {
  secret: env.JWT_SECRET,
  expiresIn: '1d',
};

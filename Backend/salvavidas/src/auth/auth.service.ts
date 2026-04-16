import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '../common/interfaces';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  /**
   * Login user and return JWT tokens
   * @param userId - User ID
   * @param email - User email
   * @param role - User role
   */
  async login(userId: string, email: string, role: string) {
    const payload: IJwtPayload = {
      sub: userId,
      email,
      role,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '30d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Validate JWT token
   */
  async validateToken(token: string): Promise<IJwtPayload> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string) {
    try {
      const payload: IJwtPayload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign({
        sub: payload.sub,
        email: payload.email,
        role: payload.role,
      });

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}

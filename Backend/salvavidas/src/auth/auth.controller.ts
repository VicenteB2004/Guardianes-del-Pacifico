import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * @route POST /auth/login
   * @description User login endpoint
   */
  @Post('login')
  async login(@Body() credentials: any) {
    // TODO: Implement login logic with password validation
    // return this.authService.login(user.id, user.email, user.role);
    return {
      message: 'Login endpoint - implement validation',
    };
  }

  /**
   * @route POST /auth/register
   * @description User registration endpoint
   */
  @Post('register')
  async register(@Body() data: any) {
    // TODO: Implement registration logic
    return {
      message: 'Register endpoint - implement validation',
    };
  }

  /**
   * @route POST /auth/refresh
   * @description Refresh access token
   */
  @Post('refresh')
  async refreshToken(@Body() body: { refreshToken: string }) {
    return this.authService.refreshToken(body.refreshToken);
  }
}

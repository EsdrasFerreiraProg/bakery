import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()

export class AuthService {
    
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string) {
    console.log(this.userService)

    const user = await this.userService.findByName(username);
    
    console.log(user)
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
     const payload = { username: user.name};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
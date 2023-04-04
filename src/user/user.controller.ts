import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {User} from '../../schemas/user.schema'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':name')
  findByName(@Param('name') name: string){
    return this.userService.findByName(name);
  }
  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() user:User) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from '../../schemas/user.schema';

@Injectable()
export class UserService {

  private readonly Logger = new Logger(UserService.name);
  
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) : Promise<User> {

    this.Logger.log(`createUser ${JSON.stringify(createUserDto)}`);

    const createdUser = new this.userModel(createUserDto);
    
    return createdUser.save();

  }

  async findAll() { 
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  public async findByName(name: string) : Promise<User>{
    return await this.userModel.findOne({name: name}).exec()
  }

  async getById(id: string){
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, user: User) {
    await this.userModel.updateOne({_id:id}, user).exec();

    return this.getById(id);

  }

  async remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}

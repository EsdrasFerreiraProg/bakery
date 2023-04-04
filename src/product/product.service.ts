import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product} from '../../schemas/product.schema';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findOne(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async getById(id: string){
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, product: Product) {
    await this.productModel.updateOne({_id:id}, product).exec();

    return this.getById(id);

  }
  async remove(id: number) {
    return this.productModel.deleteOne({_id:id}).exec();
  }
}

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {Model} from 'mongoose';

describe('ProductsController', () => {
    let productsController: ProductController;
    let productsService: ProductService;
  
    beforeEach(() => {
      productsService = new ProductService(Model<any>);
      productsController = new ProductController(productsService);
    });
  
    describe('findAll', () => {
      it('should return an array of products', async () => {
        let result;

        jest.spyOn(productsService, 'findAll').mockImplementation(() => result);
  
        expect(await productsController.findAll()).toBe(result);
      });
    });
  });

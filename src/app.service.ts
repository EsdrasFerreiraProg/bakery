import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getObject(): object {
    return {name: "John", age:"25"};
  }
}

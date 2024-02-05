import { Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  getMyHello():string {
    return this.appService.getHello();
  }

  @Get('/noman')
  getMyName():object {
    return this.appService.getName();
  }
  
  @Post('/noman')
  getMyName1():object {
    return this.appService.getName();
  }

  @Put('/noman')
  getMyName2():object {
    return this.appService.getName2();
  }

  @Patch('/noman')
  getMyName3():object {
    return this.appService.getName3();
  }

  @Delete('/noman')
  getMyName4():object {
    return this.appService.getName4();
  }
}

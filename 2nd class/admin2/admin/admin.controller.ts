import{Controller, Get, Param, Query, Post,Body, Put} from "@nestjs/common";
import { AdminService } from "./admin.service";


@Controller('/admin')  // root Route
export class AdminController{
    constructor(private readonly adminservice: AdminService){}
    
    @Get()
    getUsers():object{ 
        return this.adminservice.getUsers();
    }

    @Get('users/:id')
    getUsersById(@Param('id') id:string):object{
        return this.adminservice.getUsersById(id);
    }

    @Get('users/')
    getUsersByNameAndId(@Query('name') name:string,
    @Query('id')id:string):object{
        return this.adminservice.getUserNameAndId(name, id);
    }

    @Post('adduser')
    addUser(@Body() myobj:object): object{
        return this.adminservice.addUser(myobj);
    }

    @Put('users/:id')
    update(@Body() myobj:object, @Param('id') id:string): object{
        return this.adminservice.update(myobj, id);
    }
}



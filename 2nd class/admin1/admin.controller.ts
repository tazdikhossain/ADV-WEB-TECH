import{Controller, Get} from "@nestjs/common"

@Controller('/admin')
export class AdminController{
    @Get()
    getAdminControlller():string{
        return " Hello Admin";
    }
}
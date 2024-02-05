import {Module} from "@nestjs/common";
import {AppService} from 'src/app.service';
import {AdminController} from './admin.controller';

@Module({
    imports:[],
    controllers:[AdminController],
    providers:[AppService],
})
export class AdminModule{}
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { count } from 'console';

@Controller('manager')
export class ManagerController {
    constructor(private manageService: ManagerService) { }
    @Get()
    async test(){
        return await this.manageService.test()
    }

    @Get('user')
    async getUserAPI(@Query('count') count: string){
        console.log(count)
        
        return await this.manageService.getUserAPI()
    }
    @Get('post')
    async getPostAPI(){
        return await this.manageService.getPostAPI()
    }
    @Get('map-data')
    async mapData(){
       return await this.manageService.mapData()
    //  const dataDto = await this.manageService.mapData();
    // return await this.dbService.saveData(dataDto);
    }
    @Post('test')
    async saveData(){
        return await this.manageService.ceateData()
    }

}





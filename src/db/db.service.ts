import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { data } from 'src/interface/data.interface';
import { dataScehema } from './schema/schema';
import { dataDTO } from 'src/manager/dto/data.dto';

@Injectable()
export class DbService {
    constructor(
        @InjectModel(dataScehema.name)
        private dataModel: Model<dataScehema>
    ){}
    async saveData(data: data){
        const cre =  await this.dataModel.create(data)

         console.log(cre);
        
          //console.log("test",new this.dataModel(data));
         //console.log("data in save",map)
         return cre
        //return cre.save()
    }
}

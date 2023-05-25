import { Module } from '@nestjs/common';
import { DbController } from './db.controller';
import { DbService } from './db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dataScehema, dataScehemas } from './schema/schema';
import { data } from 'src/interface/data.interface';

@Module({
  imports: [
      MongooseModule.forFeature(
         [
          {
              name : dataScehema.name,
              schema: dataScehemas
          }
         ]
      )
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}

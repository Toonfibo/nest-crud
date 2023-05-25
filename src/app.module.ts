import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import { ManagerModule } from './manager/manager.module';
import { DbController } from './db/db.controller';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ 
    MongooseModule.forRoot(
      'mongodb://localhost:27017',
          {
              dbName: 'dataMapApi',
          },
    ),
    ManagerModule, 
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

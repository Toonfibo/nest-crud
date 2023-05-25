import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { DbModule } from 'src/db/db.module';



@Module({
        imports: [DbModule],
        providers: [ManagerService],
        controllers: [ManagerController]
})
export class ManagerModule {}

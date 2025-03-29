import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
    providers: [{
        provide: PrismaService,
        useFactory: () => PrismaService.getInstance(),
    },],
    exports: [PrismaService],
})
export class PrismaModule { }

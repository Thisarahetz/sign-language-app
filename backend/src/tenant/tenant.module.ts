import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TenantProviderService } from '@/tenant-provider/services/tenant-provider-service';

@Module({
  controllers: [TenantController],
  providers: [TenantService,TenantProviderService],
})
export class TenantModule {}

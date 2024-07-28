import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { TenantProviderService } from '@/tenant-provider/services/tenant-provider-service';
import { Tenant } from '@/database/schema/tenant';
import { processSubdomain } from '@/tenant-provider/utils/utils';

@Injectable()
export class TenantService {
  constructor( private readonly tenantProviderService: TenantProviderService) {

  }
  
  create(createTenantDto: CreateTenantDto) {
    return 'This action adds a new tenant';
  }

  findAll() {
    return `This action returns all tenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }

  async getTenant(
    schemaName: string,
  ): Promise<any> {
   
    try {
      const publicSchemaResult = await this.tenantProviderService.isPublicSchema(schemaName);

      //processSubdomain
      const process_subdomain = processSubdomain(schemaName);
   

      if (publicSchemaResult) {
        return {
          status: true,
          message: 'Public schema',
        };
      }


      const test = await this.tenantProviderService.getTenant();

      console.log('test', test);


      // const result = await this.publicRepoInstance.findOne({
      //   where: { subdomain: schemaName },
      // });
      // if (result) {
      //   // response.data = result;
      //   // response.status = true;
      //   // response.code = RESPONSE_CODE._200;
      //   // response.message = 'Tenant fetched.';
      // }
    } catch (e) {
      console.error('function', e);
      // response.message = 'An error occurred.';
      // response.extra_data = e.toString();
      // response.code = RESPONSE_CODE._500;
      // const errorObject: ErrorClass<any> = {
      //   payload: null,
      //   error: e['errors'],
      //   response: response,
      // };
      // this.logger.error(e.toString(), errorObject);
    }
    // return response;
  }
}

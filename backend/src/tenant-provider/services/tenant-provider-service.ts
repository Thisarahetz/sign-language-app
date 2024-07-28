import { isPublicSchema } from './../utils/utils';
import { Request } from 'express';
import {} from 'drizzle-orm';
export class TenantProviderService {

  isPublicSchema(subdomain: string) {
    return isPublicSchema(subdomain);
  }


    async getTenant(): Promise<any> {
        try{
            //get 
            const publicSchemaResult ='dd'

            return publicSchemaResult;
        }catch(err){
            console.error('err', err);
            return {
                status: false,
                message: 'Something went wrong, please try again.',
            };
        }
    }
  
}

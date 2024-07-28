import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
const nodeCmd = require('node-cmd');
import 'dotenv/config';
import * as schema from './schema';
import tenant, { NewTenant } from './schema/tenant';
import user, { NewUser } from './schema/user';

//create tenant data use ITenant interface
const tenant_data: NewTenant[] = [
  {
    id: 1,
    companyName: 'localhost',
    subDomain: 'localhost',
    isActive: true,
  },
];

//create user data use IUser interface
const user_data: NewUser[] = [
  {
    email: 'superadmin@gmail.com',
    role: 'super_admin',
    tenantId: 1,
    firstName: 'Super',
    lastName: 'Admin',
    password: '123456',
    username: 'superadmin',
  },
];

const main = async () => {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(client);

  //insert Tenant data
  console.log('Inserting Tenant data...');
  await db.insert(tenant).values(tenant_data).execute();

  console.log('Inserting user data...');
  await db.insert(user).values(user_data).execute();

  console.log('Data inserted!');
  //seed complete
  console.log('Seed complete!');

  //close connection
  await client.end();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

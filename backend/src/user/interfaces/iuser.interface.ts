export interface IUser {
  id?: number;
 username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
  role: string;
  tenantId: number;
}

export interface IChangePassword {
  id: number;
  password: string;
  newPassword: string;
}

export interface IEditUser {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: Date;
  id: number;
}


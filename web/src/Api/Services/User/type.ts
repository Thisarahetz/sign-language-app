export interface AdminUsers {
  status: boolean;
  status_code: number;
  message: string;
  data: Data;
}

export interface Data {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  user_id: number;
  first_name: string;
  last_name: string;
  country_code: string;
  phone_number: string;
  email: string;
  role: string;
  permission: Permission;
}

export interface Meta {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: null;
  next: number;
  pagination: string;
}

export interface Permission {
  id: number;
  user_id: number;
  module: Module[];
}

export interface Module {
  module_name: string;
}

export interface AddAdminUsers {
  phone_number: string;
  country_code: string;
  first_name: string;
  last_name: string;
  email: string;
  permission: AddPermission[];
}

export interface AddPermission {
  module: string;
  actions: number[];
}

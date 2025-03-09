export interface RegisterAccountRequest {
  name: string;
  phone_number: string;
  password: string;
}

export interface RegisterAccountResponse {
  status: string;
  access_token: string;
  data: any;
}

export interface LoginAccountRequest {
  phone_number: string;
  password: string;
}

export interface LoginAccountResponse {
  status: string;
  access_token: string;
  data: any;
}

export interface LogoutAccountResponse {
  status: string;
  message: string;
}
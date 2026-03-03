export interface RegisterRequest {
  Email: string;
  Password: string;
  UserName: string;
}

export interface LoginRequest {
  Email: string;
  Password: string;
}

export interface RegisterModel {
  UserName: string;
  Email: string;
  Password: string;
  CreatedAt: number;
}

export interface LoginByEmailModel {
  Email: string;
}

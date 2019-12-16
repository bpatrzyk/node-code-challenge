export interface UserDTO {
  name: string;
  email: string;
}

export interface NewUserDTO extends LoginDTO {
  name: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface TokenDTO {
  token: string;
}

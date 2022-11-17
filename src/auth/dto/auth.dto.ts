import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  firstName: string;

  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

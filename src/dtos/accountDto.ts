import { IsString, MinLength,IsNotEmpty,IsPhoneNumber,IsOptional } from 'class-validator';

export class AccountDto {

  @IsString()
  public email!: string;
  
  @IsString()
  @MinLength(8)
  public password!: string; 
}
export class RegisterAccountDto extends AccountDto {
  @IsPhoneNumber('VN')
  public phone!: string

  @IsNotEmpty()
  public address!: string

  @IsOptional()
  public is_active!: boolean

  public verify_token!: string
}


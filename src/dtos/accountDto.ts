import { IsString, IsNumber, MinLength, IsNotEmpty, IsOptional, IsEmail} from 'class-validator';

export class AccountDto {

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email!: string;
  
  @IsString()
  @MinLength(8)
  public password!: string; 
}
export class RegisterAccountDto extends AccountDto {

  @IsNumber()
  public phone!: number

  @IsNotEmpty()
  public address!: string
}


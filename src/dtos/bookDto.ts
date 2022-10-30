import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  public id!: number;

  @IsString()
  public bookname!: string;

  @IsString()
  public author!: string;
}

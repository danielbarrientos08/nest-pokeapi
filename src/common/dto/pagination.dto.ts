import { IsOptional, IsPositive, Min } from 'class-validator';

export class paginationDto {
  @IsOptional()
  @IsPositive()
  perPage?: number;

  @IsOptional()
  @IsPositive()
  @Min(1)
  page?: number;
}

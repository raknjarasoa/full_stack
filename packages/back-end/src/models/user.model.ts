import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class Address {
  @ApiModelProperty()
  rue: string;

  @ApiModelProperty()
  ville: string;
}

export class User {
  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  bod: string;

  @ApiModelProperty()
  password: string;

  @ApiModelPropertyOptional()
  address: Address;
}

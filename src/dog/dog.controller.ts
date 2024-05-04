import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response, query } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.introduce();
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }

  /* Requestni ishlatsak:
@Get('greet/:id')
  public introduce(@Req() request: Request): string {
    console.log('request.params', request.params);
    return this.dogService.introduce();
  } */

  /* Responseni ham ishlatishimiz mumkin:
    @Get('greet/:id')
  public introduce(@Req() request: Request, @Res() response: Response) {
    console.log('request.params', request.params);
    const result = this.dogService.introduce();
    response.status(200).send(result);
  }   */
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Wow!';
  }

  public introduce(): string {
    return 'My name is Rex';
  }

  public modifyDetail(): string {
    return 'Modified';
  }
}

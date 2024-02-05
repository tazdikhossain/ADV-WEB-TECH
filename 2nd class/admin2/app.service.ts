import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bhai valo ase ok ghghggh  ';
  }
  getName(): object {
    return {
      message: 'get',
      state: 'false',
      family: {
        son: 'Roan',
      },
    };
  }
  getName1(): object {
    return {
      message: 'post',
      state: 'false',
      family: {
        son: 'Roan',
      },
    };
  }

  getName2(): object {
    return {
      message: 'put',
      state: 'false',
      family: {
        son: 'Roan',
      },
    };
  }
  getName3(): object {
    return {
      message: 'patch',
      state: 'false',
      family: {
        son: 'Roan',
      },
    };
  }
  getName4(): object {
    return {
      message: 'delete',
      state: 'false',
      family: {
        son: 'Roan',
      },
    };
  }
}

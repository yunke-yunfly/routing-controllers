import { Request } from 'express';
import { Controller } from '../../src/decorator/Controller';
import { Get } from '../../src/decorator/Get';
import { Req } from '../../src/index';
import { Post } from '../../src/decorator/Post';
import { Put } from '../../src/decorator/Put';
import { Patch } from '../../src/decorator/Patch';
import { Delete } from '../../src/decorator/Delete';
import { Param } from '../../src/decorator/Param';
import { Session } from '../../src/decorator/Session';
import { SessionParam } from '../../src/decorator/SessionParam';
import { ContentType } from '../../src/decorator/ContentType';

@Controller()
export class UserController {
  @Get('/users')
  @ContentType('application/json')
  getAll() {
    return [
      { id: 1, name: 'First user!' },
      { id: 2, name: 'Second user!' },
    ];
  }

  @Get('/users/:id')
  @ContentType('application/json')
  getOne(@SessionParam('user') user: any) {
    return user;
  }

  @Post('/users')
  post(@Req() request: Request) {
    let user = JSON.stringify(request.body); // probably you want to install body-parser for express
    return 'User ' + user + ' !saved!';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Session() session: Express.Session) {
    (session as any).user = { name: 'test', number: id };
    return 'User has been putted!';
  }

  @Patch('/users/:id')
  patch(@Req() request: Request) {
    return 'User #' + request.params.id + ' has been patched!';
  }

  @Delete('/users/:id')
  remove(@Req() request: Request) {
    return 'User #' + request.params.id + ' has been removed!';
  }
}

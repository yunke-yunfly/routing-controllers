import { createParamDecorator } from '../../src/index';
import { User } from './User';

/**
 * Simple decorator - re-implementation of CurrentUser decorator.
 */
export function UserFromSession(options?: { required?: boolean }) {
  return createParamDecorator({
    required: options && options.required ? true : false,
    value: action => {
      // perform queries based on token from request headers
      // const token = action.request.headers["authorization"];
      // return database.findUserByToken(token);
      return new User(1, 'Johny', 'Cage');
    },
  });
}

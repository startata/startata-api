import { HttpsError } from 'firebase-functions/v1/https';

export class UnauthorizedException extends HttpsError {
  constructor() {
    super('unauthenticated', 'Unauthorized error');
  }
}

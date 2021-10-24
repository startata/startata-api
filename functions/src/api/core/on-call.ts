/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { User } from '@/domain/entities/user';

import { https } from 'firebase-functions';
import { Ref, Type } from '@/common/types';
import { fromPlain } from '@/common/transformations';
import { UnauthorizedException } from './errors';

export interface RequestContext {
  user?: Ref<User>;
}

export interface RequestOptions<RequestType extends Record<string, unknown>> {
  requestType: Type<RequestType>;
}

export function onCall<
  RequestType extends Record<string, unknown>,
  ResponseType extends Record<string, unknown>
>(
  fn: (
    input: RequestType,
    context: RequestContext
  ) => ResponseType | Promise<ResponseType>,
  { requestType }: RequestOptions<RequestType>
) {
  return https.onCall(async (data, context) => {
    const userId = context.auth?.uid;

    if (!userId) {
      throw new UnauthorizedException();
    }

    const user = { id: userId };

    const request = await fromPlain(requestType, data);
    const result = await fn(request, { user });

    return result;
  });
}

import { plainToClass, classToPlain } from 'class-transformer';
import { Type } from './types';

export async function fromPlain<T extends Record<string, unknown>>(
  constructor: Type<T>,
  data: Record<string, unknown>
): Promise<T> {
  const transformed = plainToClass(constructor, data);

  return transformed;
}


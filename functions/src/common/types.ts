export type Type<T, Props extends unknown[] = unknown[]> = {
  new (props: Props): T;
};

export type Ref<T extends { id: string }> = Required<Pick<T, 'id'>> &
  Partial<T>;

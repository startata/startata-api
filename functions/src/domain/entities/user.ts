export class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;

  constructor(init: User) {
    this.id = init.id;
    this.name = init.name;
    this.email = init.email;
  }
}

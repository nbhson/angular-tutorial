export class User {
  firstname: string
  lastname: string 
  phone: string
  username: string
  id?: number

  constructor(firstname: string, lastname: string, phone: string, username: string, id: number = -1) {
    this.firstname = firstname
    this.lastname = lastname
    this.phone = phone
    this.username = username
    this.id = id
  }

  static createBlank(): User {
    return new User('', '', '', '');
  }

  get fullName(): string{
    return `${this.firstname} ${this.lastname}`;
  }

  get valid(): boolean {
    return this.firstname.length > 0 && this.lastname.length > 0;
  }

  cloneUser(): User {
    return new User(this.firstname, this.lastname, this.phone, this.username, this.id)
  }

}
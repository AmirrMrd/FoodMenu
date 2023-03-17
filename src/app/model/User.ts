export class User {
  firstName : string;
  lastName : string;
  emailOrMobile : string;
  password : string;
  confirmPassword: any;

  constructor () {
    this.firstName = '',
    this.lastName = '',
    this.emailOrMobile = '',
    this.password = ''
  }
}

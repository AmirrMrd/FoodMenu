export class registerModel {
    firstName : string;
    lastName : string;
    emailOrMobile : string;
    password : string;
    confirmPassword : string;
    
    constructor () {
        this.firstName = '',
        this.lastName = '',
        this.emailOrMobile = '',
        this.password = '',
        this.confirmPassword = ''
    }
}
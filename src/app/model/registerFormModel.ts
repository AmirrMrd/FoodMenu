export class registerFormModel {
    id? : number;
    firstName : string;
    lastName : string;
    emailOrMobile : string;
    password : string;
    confirmPassword;

    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.emailOrMobile = '';
        this.password = '';
        this.confirmPassword = '';
    }

}
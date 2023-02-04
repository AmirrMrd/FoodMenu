export class loginFormModel {
    emailOrMobile : string;
    password : string;
    constructor (){
        this.emailOrMobile = '';
        this.password = '';
    }

    
    public set _emailOrMobile(emailOrMobile : string) {
        this.emailOrMobile = emailOrMobile;
    }

    public set _password(password : string) {
        this.password = password;
    }

    
}
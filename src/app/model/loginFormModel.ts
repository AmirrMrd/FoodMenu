import { Validator } from "@angular/forms";

export class loginFormModel {
    id? : number;
    emailOrMobile : string | null;
    password : string;
    constructor (){
        this.emailOrMobile = ''
        this.password = ''
    }

    
    // public set _emailOrMobile(emailOrMobile : string) {
    //     this.emailOrMobile = emailOrMobile;
    // }

    // public set _password(password : string) {
    //     this.password = password;
    // }

    
}
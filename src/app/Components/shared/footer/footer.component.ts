import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  information : string = 'اطلاعات';
  support : string = 'پشتیبانی';
  category : string = 'دسته بندی';
  product : string = 'محصولات';
  aboutUs : string = 'تماس با ما';

}

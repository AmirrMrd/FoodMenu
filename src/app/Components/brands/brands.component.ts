import { Component , OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import { brand } from 'src/app/model/Brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  public brandsItems : brand[] = []

 brandItem : brand = {
  brandId: '',
  brandName: '',
  brandIpAddress: '',
  brandPortNumber: '',
  brandActive: true,
  brandImageUrl : ''
}

  constructor(public brand : BrandService){}


  ngOnInit () {
    this.getItem ();
    
  }

  getItem () {
    this.brandsItems = this.brand.brands;
    for (let index = 0; index < this.brandsItems.length; index++) {
      const element = this.brandsItems[index];
      this.brandItem = element;
      console.log(this.brandItem);
    }
  }
    

 
}

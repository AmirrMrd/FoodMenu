import { Injectable } from '@angular/core';
import { brand } from 'src/app/model/Brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  getBrand() {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  public brands: brand[] = [
    {
      brandId: '101',
      brandName: 'برگر ذغالی',
      brandIpAddress: '192.168.1.10',
      brandPortNumber: '31000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '102',
      brandName: 'سوخاری دی',
      brandIpAddress: '192.168.1.20',
      brandPortNumber: '32000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '103',
      brandName: 'برگر فکتوری',
      brandIpAddress: '192.168.1.30',
      brandPortNumber: '33000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    },
    {
      brandId: '104',
      brandName: 'سالاد بار',
      brandIpAddress: '192.168.1.40',
      brandPortNumber: '34000',
      brandActive: true,
      brandImageUrl : ''
    }
  ];

public addBrand (data : brand) {
  this.brands.push(data);
}


}

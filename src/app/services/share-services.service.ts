import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShareServicesService {
  data = {
    name: 'aymen',
    last: 'mosrati',
    country: 'tunisia',
  };
  url = 'http://aymenmosrati.vercel.dev';
  constructor() {}

  getData() {
    console.log(this.data.name);
    console.log(this.data.last);
    console.log(this.data.country);
  }
}

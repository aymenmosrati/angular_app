import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServicesService } from '../services/share-services.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  style1 = 'red';
  style2 = '30px';
  style3 = 'underline';

  num = 20;
  date = '06/18/2021';
  profile = {
    firstName: '',
    lastName: 'Mosrati',
    website: 'www.aymen.com',
    country: 'TUNISIA',
    age: 23,
  };
  FirstName = 'Aymen';
  LastName = 'Mosrati';
  country = 'TUNISIA';
  titleCladd = 'title';

  linkImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg';
  titleStyle = 'block';
  title2Style = 'blue';
  link = 'http://aymenmosrati.vercel.dev';
  verify = true;
  x = 1;
  y = 2;
  dataArray = ['tunisie', 'morroco', 'libbia', 'algerie'];

  constructor(private route: Router, private share: ShareServicesService) {
    // this.share.getData();
    console.log(this.share.data);
    console.log(this.share.url);
  }

  ngOnInit(): void {}

  inc() {
    this.num++;
  }
  dec() {
    this.num--;
  }

  show() {
    this.titleStyle = 'color:red;font-size:20px';
  }
  hidden() {
    this.titleStyle = 'color:green;font-size:40px';
  }

  goToView() {
    this.route.navigate([
      'profile/' + this.profile.firstName + '/' + this.profile.age + '/view',
    ]);
  }
  goToDetails() {
    this.route.navigate([
      'profile/' + this.profile.firstName + '/' + this.profile.age + '/details',
    ]);
  }

  add(f: NgForm) {
    let data = f.value;
    console.log(data);
  }
}

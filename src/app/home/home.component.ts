import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    firstName: 'Aymen',
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
  constructor() {}

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
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  profile = {
    firstName: 'Aymen',
    lastName: 'Mosrati',
    website: 'www.aymen.com',
    country: 'tunisia',
    age: 23,
  };

  linkImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg';
  titleStyle = 'block';
  title2Style = 'blue';
  link = 'http://aymenmosrati.vercel.dev';
  num = 1;
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

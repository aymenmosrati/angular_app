import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  FirstName = 'Aymen';
  LastName = 'Mosrati';
  country = 'TUNISIA';
  titleCladd = 'title';

  profile = {
    firstName: 'aymen',
    lastName: 'mosrati',
    country: 'TUNISIA',
    titleCladd: 'title',
  };
  style1 = 'red';
  style2 = '30px';
  style3 = 'underline';

  num = 20;
  date = '06/18/2021';
}

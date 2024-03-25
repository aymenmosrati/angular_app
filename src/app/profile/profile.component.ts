import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  getName = '';
  getId = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.getName = params['name'];
      this.getId = params['id'];
    });
  }
}

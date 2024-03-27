import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  name = '';
  age = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
      this.age = params['id'];
    });
  }
}

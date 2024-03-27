import { Component } from '@angular/core';
import { ShareServicesService } from '../services/share-services.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(private share: ShareServicesService) {
    console.log(this.share.data);
    console.log(this.share.url);
    this.share.getData();
  }
}

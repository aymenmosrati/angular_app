import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShareServicesService } from '../services/share-services.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  name = 'aymenmosrati';
  id = '45rtgre5Xcjn868sd4';
  verifAdmin: boolean;
  constructor(private s: ShareServicesService) {
    this.verifAdmin = this.s.isAdmin;
  }
}

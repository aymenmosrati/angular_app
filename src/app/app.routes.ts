import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { guardAdminGuard } from './guards/guard-admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [guardAdminGuard],
  },
  {
    path: 'profile/:name/:id',
    // component: ProfileComponent,
    children: [
      { path: 'view', component: ViewComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    path: 'contact',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

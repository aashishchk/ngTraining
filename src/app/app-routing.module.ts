import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './about/profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './_services/user-list.service';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id/:name', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', component: HomeComponent },
  { path: 'error-404', component: Error404Component },
  { path: '**', redirectTo: 'error-404' }
];

@NgModule({
  declarations: [AboutComponent, ContactComponent, HomeComponent, Error404Component, ProfileComponent, UserListComponent],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserListService]
})
export class AppRoutingModule { }

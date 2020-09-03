import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component'; // Add this
import { ProjectsComponent } from './projects/projects.component'; // Add this
import { ExperienceComponent } from './experience/experience.component'; // Add this
import { ContactComponent } from './contact/contact.component'; // Add this


const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'projects', component: ProjectsComponent },   // Add this
  { path: 'experience', component: ExperienceComponent },   // Add this
  { path: 'contact', component: ContactComponent }   // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

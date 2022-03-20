import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { PhotographyComponent } from './photography/photography.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { DataScienceComponent } from './data-science/data-science.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'web_development',
    component: WebDevelopmentComponent
  },
  {
    path: 'data_science',
    component: DataScienceComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'my-work',
    component: MyWorkComponent
  },
  { 
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: 'projects/:id', 
    component: ProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

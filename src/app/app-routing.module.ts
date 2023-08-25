import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './feature/about/about.component';
import { IntroComponent } from './feature/intro/intro.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { ResumeComponent } from './feature/resume/resume.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

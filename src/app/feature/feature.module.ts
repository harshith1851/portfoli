import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IntroComponent,AboutComponent,ProjectsComponent,ResumeComponent],
})
export class FeatureModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AwardsComponent } from './components/awards/awards.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path : '', redirectTo : 'about', pathMatch : 'full' },
  { path : 'about', component : AboutComponent},
  { path : 'experience', component : ExperienceComponent},
  { path : 'education', component : EducationComponent},
  { path : 'contact-me', component : ContactMeComponent},
  { path : 'awards', component : AwardsComponent},
  { path : 'skills', component : SkillsComponent},
  { path : '**', component : FileNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

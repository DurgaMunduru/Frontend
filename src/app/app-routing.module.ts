import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobseekerprofileComponent } from './create-jobseekerprofile/create-jobseekerprofile.component';
import { UpdateJobseekerprofileComponent } from './update-jobseekerprofile/update-jobseekerprofile.component';
import { JobseekerDetailsComponent } from './jobseeker-details/jobseeker-details.component';
import { JobseekerprofilesComponent } from './jobseekerprofiles/jobseekerprofiles.component';
import { GetProfilesBySkillComponent } from './get-profiles-by-skill/get-profiles-by-skill.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [

  {
    path:'jobseekerprofiles', component:JobseekerprofilesComponent
  },
  {
    path:'create-profile', component:CreateJobseekerprofileComponent
  },
  {
    path:'', redirectTo:'jobseekerprofiles',pathMatch:'full'
  },
  {
    path:'update-jobseekerprofile/:firstname', component:UpdateJobseekerprofileComponent
  },
  {
    path:'jobseeker-details/:firstname', component:JobseekerDetailsComponent
  },
  {
    path:'getprofile', component:GetProfilesBySkillComponent
  },
{
  path:'communication/:email', component:CommunicationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJobseekerprofileComponent } from './create-jobseekerprofile/create-jobseekerprofile.component';
import { GetUserJobseekerComponent } from './get-user-jobseeker/get-user-jobseeker.component';
import { GetUserandJobsJobseekerComponent } from './get-userand-jobs-jobseeker/get-userand-jobs-jobseeker.component';
import { GetbySkillJobseekerComponent } from './getby-skill-jobseeker/getby-skill-jobseeker.component';
import { UpdateJobseekerprofileComponent } from './update-jobseekerprofile/update-jobseekerprofile.component';
import { JobseekerprofilesComponent } from './jobseekerprofiles/jobseekerprofiles.component';
import { JobseerkerDetailsComponent } from './jobseerker-details/jobseerker-details.component';
import { JobseekerDetailsComponent } from './jobseeker-details/jobseeker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateJobseekerprofileComponent,
    GetUserJobseekerComponent,
    GetUserandJobsJobseekerComponent,
    GetbySkillJobseekerComponent,
    UpdateJobseekerprofileComponent,
    JobseekerprofilesComponent,
    JobseerkerDetailsComponent,
    JobseekerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

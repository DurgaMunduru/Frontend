import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJobseekerprofileComponent } from './create-jobseekerprofile/create-jobseekerprofile.component';
import { GetUserJobseekerComponent } from './get-user-jobseeker/get-user-jobseeker.component';
import { UpdateJobseekerprofileComponent } from './update-jobseekerprofile/update-jobseekerprofile.component';
import { JobseekerprofilesComponent } from './jobseekerprofiles/jobseekerprofiles.component';
import { JobseekerDetailsComponent } from './jobseeker-details/jobseeker-details.component';
import { GetProfilesBySkillComponent } from './get-profiles-by-skill/get-profiles-by-skill.component';
import { CommunicationComponent } from './communication/communication.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateJobseekerprofileComponent,
    GetUserJobseekerComponent,
    UpdateJobseekerprofileComponent,
    JobseekerprofilesComponent,
    JobseekerDetailsComponent,
    GetProfilesBySkillComponent,
    CommunicationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

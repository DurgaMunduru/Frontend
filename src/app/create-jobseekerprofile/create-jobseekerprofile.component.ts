import { Component, OnInit } from '@angular/core';
import { JobseekerProfile } from '../jobseeker-profile';
import { JobseekerProfileService } from '../jobseeker-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-jobseekerprofile',
  templateUrl: './create-jobseekerprofile.component.html',
  styleUrls: ['./create-jobseekerprofile.component.css']
})
export class CreateJobseekerprofileComponent implements OnInit {

  profile:JobseekerProfile = new JobseekerProfile();

  constructor(private jobseekerprofileservice:JobseekerProfileService,
     private router:Router){}


  ngOnInit(): void {
    
  }

  saveProfile(){
    this.jobseekerprofileservice.createJobSeekerProfile(this.profile).subscribe(data=>{
      console.log(data);
      this.gotoProfileslist()
    },
    error => console.log(error)
    );
  }


  gotoProfileslist(){
    this.router.navigate(['/jobseekerprofiles'])
  }


  onSubmit(){
    console.log(this.profile);
    this.saveProfile;
  }


}

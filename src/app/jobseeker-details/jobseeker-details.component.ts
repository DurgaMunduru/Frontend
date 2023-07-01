import { Component, OnInit } from '@angular/core';
import { JobseekerProfile } from '../jobseeker-profile';
import { ActivatedRoute } from '@angular/router';
import { JobseekerProfileService } from '../jobseeker-profile.service';

@Component({
  selector: 'app-jobseeker-details',
  templateUrl: './jobseeker-details.component.html',
  styleUrls: ['./jobseeker-details.component.css']
})
export class JobseekerDetailsComponent implements OnInit{

  firstname:string='';
  profile:any;

  constructor(private jobSeekerService:JobseekerProfileService,
    private route:ActivatedRoute){}


ngOnInit(): void {
  this.firstname=this.route.snapshot.params['firstname'];
  this.profile=new JobseekerProfile();
  this.jobSeekerService.getProfileByFirstName(this.firstname).subscribe(data=>{
    this.profile=data;
  })

}





}

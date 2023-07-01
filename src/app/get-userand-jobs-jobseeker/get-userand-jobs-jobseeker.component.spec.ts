import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserandJobsJobseekerComponent } from './get-userand-jobs-jobseeker.component';

describe('GetUserandJobsJobseekerComponent', () => {
  let component: GetUserandJobsJobseekerComponent;
  let fixture: ComponentFixture<GetUserandJobsJobseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserandJobsJobseekerComponent]
    });
    fixture = TestBed.createComponent(GetUserandJobsJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

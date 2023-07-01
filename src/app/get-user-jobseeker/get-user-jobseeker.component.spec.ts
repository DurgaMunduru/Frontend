import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserJobseekerComponent } from './get-user-jobseeker.component';

describe('GetUserJobseekerComponent', () => {
  let component: GetUserJobseekerComponent;
  let fixture: ComponentFixture<GetUserJobseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserJobseekerComponent]
    });
    fixture = TestBed.createComponent(GetUserJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

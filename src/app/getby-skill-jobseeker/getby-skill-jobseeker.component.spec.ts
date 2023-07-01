import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbySkillJobseekerComponent } from './getby-skill-jobseeker.component';

describe('GetbySkillJobseekerComponent', () => {
  let component: GetbySkillJobseekerComponent;
  let fixture: ComponentFixture<GetbySkillJobseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbySkillJobseekerComponent]
    });
    fixture = TestBed.createComponent(GetbySkillJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

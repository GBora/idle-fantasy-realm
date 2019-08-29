import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceHallComponent } from './audience-hall.component';

describe('AudienceHallComponent', () => {
  let component: AudienceHallComponent;
  let fixture: ComponentFixture<AudienceHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudienceHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

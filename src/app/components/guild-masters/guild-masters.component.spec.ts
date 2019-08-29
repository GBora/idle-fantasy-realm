import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildMastersComponent } from './guild-masters.component';

describe('GuildMastersComponent', () => {
  let component: GuildMastersComponent;
  let fixture: ComponentFixture<GuildMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

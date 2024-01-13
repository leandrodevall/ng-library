import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseMeComponent } from './release-me.component';

describe('ReleaseMeComponent', () => {
  let component: ReleaseMeComponent;
  let fixture: ComponentFixture<ReleaseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseMeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

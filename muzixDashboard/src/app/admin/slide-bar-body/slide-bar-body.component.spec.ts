import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBarBodyComponent } from './slide-bar-body.component';

describe('SlideBarBodyComponent', () => {
  let component: SlideBarBodyComponent;
  let fixture: ComponentFixture<SlideBarBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideBarBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideBarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

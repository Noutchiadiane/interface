import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMenuHeaderComponent } from './shared-menu-header.component';

describe('SharedMenuHeaderComponent', () => {
  let component: SharedMenuHeaderComponent;
  let fixture: ComponentFixture<SharedMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMenuHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

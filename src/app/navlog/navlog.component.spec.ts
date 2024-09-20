import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogComponent } from './navlog.component';

describe('NavlogComponent', () => {
  let component: NavlogComponent;
  let fixture: ComponentFixture<NavlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteringComponent } from './registering.component';

describe('RegisteringComponent', () => {
  let component: RegisteringComponent;
  let fixture: ComponentFixture<RegisteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

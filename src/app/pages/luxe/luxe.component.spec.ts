import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeComponent } from './luxe.component';

describe('LuxeComponent', () => {
  let component: LuxeComponent;
  let fixture: ComponentFixture<LuxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

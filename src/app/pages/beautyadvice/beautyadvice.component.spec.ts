import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyadviceComponent } from './beautyadvice.component';

describe('BeautyadviceComponent', () => {
  let component: BeautyadviceComponent;
  let fixture: ComponentFixture<BeautyadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyadviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

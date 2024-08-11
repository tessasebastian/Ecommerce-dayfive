import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NykafashionComponent } from './nykafashion.component';

describe('NykafashionComponent', () => {
  let component: NykafashionComponent;
  let fixture: ComponentFixture<NykafashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NykafashionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NykafashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

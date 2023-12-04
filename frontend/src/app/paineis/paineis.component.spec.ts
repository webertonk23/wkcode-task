import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineisComponent } from './paineis.component';

describe('PaineisComponent', () => {
  let component: PaineisComponent;
  let fixture: ComponentFixture<PaineisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaineisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaineisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

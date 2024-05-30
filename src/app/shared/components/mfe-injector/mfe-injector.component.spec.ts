import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeInjectorComponent } from './mfe-injector.component';

describe('MfeInjectorComponent', () => {
  let component: MfeInjectorComponent;
  let fixture: ComponentFixture<MfeInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeInjectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfeInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

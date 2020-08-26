import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDynamicFormComponent } from './reactive-dynamic-form.component';

describe('ReactiveDynamicFormComponent', () => {
  let component: ReactiveDynamicFormComponent;
  let fixture: ComponentFixture<ReactiveDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditerComponent } from './name-editer.component';

describe('NameEditerComponent', () => {
  let component: NameEditerComponent;
  let fixture: ComponentFixture<NameEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

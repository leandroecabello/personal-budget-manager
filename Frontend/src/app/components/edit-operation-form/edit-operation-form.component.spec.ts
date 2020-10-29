import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperationFormComponent } from './edit-operation-form.component';

describe('EditOperationFormComponent', () => {
  let component: EditOperationFormComponent;
  let fixture: ComponentFixture<EditOperationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLoginComponent } from './cs-login.component';

describe('CsLoginComponent', () => {
  let component: CsLoginComponent;
  let fixture: ComponentFixture<CsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsMapsComponent } from './cs-maps.component';

describe('CsMapsComponent', () => {
  let component: CsMapsComponent;
  let fixture: ComponentFixture<CsMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

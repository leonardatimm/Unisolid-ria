import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngListComponent } from './ong-list';

describe('OngList', () => {
  let component: OngListComponent;
  let fixture: ComponentFixture<OngListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OngListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

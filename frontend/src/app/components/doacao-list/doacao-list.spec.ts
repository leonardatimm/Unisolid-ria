import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoList } from './doacao-list';

describe('DoacaoList', () => {
  let component: DoacaoList;
  let fixture: ComponentFixture<DoacaoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoacaoList],
    }).compileComponents();

    fixture = TestBed.createComponent(DoacaoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

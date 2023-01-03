import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDeAhorrosComponent } from './cuenta-de-ahorros.component';

describe('CuentaDeAhorrosComponent', () => {
  let component: CuentaDeAhorrosComponent;
  let fixture: ComponentFixture<CuentaDeAhorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaDeAhorrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaDeAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

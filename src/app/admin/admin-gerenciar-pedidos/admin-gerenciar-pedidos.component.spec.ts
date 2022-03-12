import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGerenciarPedidosComponent } from './admin-gerenciar-pedidos.component';

describe('AdminGerenciarPedidosComponent', () => {
  let component: AdminGerenciarPedidosComponent;
  let fixture: ComponentFixture<AdminGerenciarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGerenciarPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGerenciarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

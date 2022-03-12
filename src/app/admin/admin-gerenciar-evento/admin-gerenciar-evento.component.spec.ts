import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGerenciarEventoComponent } from './admin-gerenciar-evento.component';

describe('AdminGerenciarEventoComponent', () => {
  let component: AdminGerenciarEventoComponent;
  let fixture: ComponentFixture<AdminGerenciarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGerenciarEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGerenciarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

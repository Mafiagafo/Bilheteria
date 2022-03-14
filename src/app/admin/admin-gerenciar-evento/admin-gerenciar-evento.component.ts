import { AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { EventoService } from './../../evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-gerenciar-evento',
  templateUrl: './admin-gerenciar-evento.component.html',
  styleUrls: ['./admin-gerenciar-evento.component.css']
})
export class AdminGerenciarEventoComponent implements OnInit {
  evento$: AngularFireList<any>;
  evento_lst$: Observable<any[]>;

  constructor(private eventoService: EventoService) { 
    this.evento$ = this.eventoService.getAll();
    this.evento_lst$ =  this.evento$.valueChanges();
  }

  ngOnInit() {
  }

}

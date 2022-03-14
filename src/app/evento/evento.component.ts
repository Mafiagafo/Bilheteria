import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/compat/database';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  evento: Evento[] = [];
  evento$: AngularFireList<any>;
  evento_lst$: Observable<any[]>;

  constructor(private eventoService: EventoService) { 
  this.evento$ = this.eventoService.getAll();
  this.evento_lst$ =  this.evento$.valueChanges();

  }
  
  
 
}

import { EventoComponent } from './evento/evento.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private db: AngularFireDatabase) { }
  
  create(evento: EventoComponent){
    this.db.list('/eventos').push(evento)
  }
}

  

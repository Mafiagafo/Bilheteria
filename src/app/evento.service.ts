import { EventoComponent } from './evento/evento.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';

@Injectable()

export class EventoService {

  constructor(private db: AngularFireDatabase) { }
  
  create(evento: EventoComponent){
    return this.db.list('/evento').push(evento)
  }

  getAll(){
    return this.db.list('evento');
  }

  getEvento(eventoId: any ){
    return this.db.object('/evento/' + eventoId);

  }
}

  

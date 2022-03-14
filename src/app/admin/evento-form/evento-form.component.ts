import { EventoService } from './../../evento.service';
import { EventoComponent } from './../../evento/evento.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isValidFormat } from '@firebase/util';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  evento: any;

  constructor(
    private eventoService: EventoService, 
    private router: Router,
    private route: ActivatedRoute) { 

    
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.eventoService.getEvento(id).snapshotChanges();
    }

  save(evento: EventoComponent){

    this.eventoService.create(evento);
    this.router.navigate(['admin/gerenciar-evento'])
  }

  ngOnInit(): void {
  }

}

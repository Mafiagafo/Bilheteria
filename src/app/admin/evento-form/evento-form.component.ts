import { EventoService } from './../../evento.service';
import { EventoComponent } from './../../evento/evento.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  constructor(
    private eventoService: EventoService, 
    private router: Router) { 

    }

  save(evento: EventoComponent){
    this.eventoService.create(evento);
    this.router.navigate(['admin/gerenciar-evento'])
  }

  ngOnInit(): void {
  }

}

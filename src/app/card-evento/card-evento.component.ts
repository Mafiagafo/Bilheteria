import { CarrinhoService } from './../carrinho.service';
import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../models/evento';


@Component({
  selector: 'card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent {
  @Input('evento')
  evento!: Evento;

  constructor(private carrinhoService: CarrinhoService) { }

  addCarrinho(evento: Evento){
    let carrinhoId = localStorage.getItem('carrinhoId');
    if (!carrinhoId){
      this.carrinhoService.criar().then(result => 
        localStorage.setItem('carrinhoId', ''));
      };
    }
  }

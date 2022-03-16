import { Evento } from './models/evento';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private db: AngularFireDatabase) {  }
  private criar(){
    return this.db.list('/carrinho').push({
      dataCarrinho: new Date().getTime()
    })
  }

  private selecionaCarrinho (carrinhoId: string){
    return this.db.object('/carrinho/'+ carrinhoId)
  }

Carrinho(evento: Evento){
  let carrinhoId = localStorage.getItem('carrinhoId');
    if (!carrinhoId){
      this.criar().then(result => {
        localStorage.setItem('carrinhoId', String(result.key));

        return this.selecionaCarrinho(String(result.key));
      });
    }
  }
}
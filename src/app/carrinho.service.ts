import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private db: AngularFireDatabase) { 
    
  }
  criar(){
    return this.db.list('/carrinho').push({
      dataCarrinho: new Date().getTime()
    })
  }
}
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent  {

  constructor() { 
    
  }
  // criar(){
  //   return this.db.list('/carrinho').push({
  //     dataCarrinho: new Date().getTime()
  //   })
  // }
}

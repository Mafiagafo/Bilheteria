import { Evento } from './models/evento';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private db: AngularFireDatabase) {  }
  private criarCarrinho(){
    return this.db.list('/carrinho').push({
      dataCarrinho: new Date().getTime()
    })
  }

  private selecionaCarrinho (carrinhoId: string){
    return this.db.object('/carrinho/'+ carrinhoId)
  }

  private getItem(carrinhoId: any, eventoId: string){
    return this.db.object('/carrinho/' + carrinhoId + '/items/' + eventoId);

  }

  private async CarrinhoId(evento: Evento){
    let carrinhoId = localStorage.getItem('carrinhoId');
      if (carrinhoId != null) return carrinhoId;
      else{
        let result = await this.criarCarrinho();
        localStorage.setItem('carrinhoId', String(result.key));
        return result.key;

      }
      
    }

  async addCarrinho(evento: Evento){
    let carrinhoId = await this.CarrinhoId(evento);
    let item$: any  = this.getItem(carrinhoId, evento.$key);
  //   item$.take(1).subscribe((item: { quantidade: number; }) => {
  //     item$.update({ evento: evento, quantidade: (item.quantidade || 0 ) + 1});
      
  //  });
    item$.take(1).subscribe((item: { $exists: () => any; quantidade: number; }) => {
       if (item.$exists()) item$.update({ evento: evento, quantidade: (item.quantidade || 0 ) + 1});
       else item$.update({ evento: evento, quantidade: item.quantidade || 0 + 1}).push;
    });
  }
}
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { MeusIngressosComponent } from './meus-ingressos/meus-ingressos.component';
import { AdminGerenciarEventoComponent } from './admin/admin-gerenciar-evento/admin-gerenciar-evento.component';
import { AdminGerenciarPedidosComponent } from './admin/admin-gerenciar-pedidos/admin-gerenciar-pedidos.component';
import { PedidoConcluidoComponent } from './pedido-concluido/pedido-concluido.component';
import { LoginComponent } from './login/login.component';
import { EventoFormComponent } from './admin/evento-form/evento-form.component';
import { EventoService } from './evento.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    EventoComponent,
    ConfirmacaoComponent,
    MeusIngressosComponent,
    AdminGerenciarEventoComponent,
    AdminGerenciarPedidosComponent,
    LoginComponent,
    EventoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'evento', component: EventoComponent},
      {path: 'carrinho', component: CarrinhoComponent},
      {path: 'confirmacao', component: ConfirmacaoComponent},
      {path: 'pedido-concluido', component: PedidoConcluidoComponent},
      {path: 'meus-ingressos', component: MeusIngressosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/gerenciar-evento', component: AdminGerenciarEventoComponent},
      {path: 'admin/gerenciar-pedidos', component: AdminGerenciarPedidosComponent},
      {path: 'admin/evento/novo', component: EventoFormComponent},
      
    ])
  ],
  providers: [
    EventoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

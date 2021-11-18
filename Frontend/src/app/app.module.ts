import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importacao do filtro
import { NgxPaginationModule } from 'ngx-pagination'; // Importacao do pagination

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    NotfoundComponent,
    CadastrarCursoComponent
  ],
  imports: [
    NgxPaginationModule, // Modulo para paginacao de dados
    Ng2SearchPipeModule, // Modulo para filtragem de dados
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // Dependencia para o Toastr
    ToastrModule.forRoot({ // Usado para imprimir mensagens animadas na tela
      positionClass: 'toast-top-right',  // As opcoes para uso do toastr
      progressAnimation: 'decreasing',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      timeOut: 5000
    })
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

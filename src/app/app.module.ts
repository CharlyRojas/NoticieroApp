import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoticiasDetailComponent } from './noticias/noticias-detail/noticias-detail.component';
import { NoticiasListComponent } from './noticias/noticias-list/noticias-list.component';
import { NoticiasItemComponent } from './noticias/noticias-list/noticias-item/noticias-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { IngredientsService } from './services/ingredients.service';
import { AppRoutingModule } from './app-routing.module';
import { NoticiaStartComponent } from './noticias/noticia-start/noticia-start.component';
import { NoticiaEditComponent } from './noticias/noticia-edit/noticia-edit.component';
import { FormStyle } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoticiaServices } from './services/noticia.service';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticiasComponent,
    ShoppingListComponent,
    NoticiasDetailComponent,
    NoticiasListComponent,
    NoticiasItemComponent,
    ShoppingEditComponent,
    NoticiaStartComponent,
    NoticiaEditComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [IngredientsService,NoticiaServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

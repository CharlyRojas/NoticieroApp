import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';
import { NoticiaServices } from '../services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiaServices]
})
export class NoticiasComponent implements OnInit {
  noticiaSelected : Noticia;
  constructor(private noticiaService: NoticiaServices) { }

  ngOnInit() {
   
  }
}

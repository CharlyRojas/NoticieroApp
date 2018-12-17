import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../../noticia.model';
import { NoticiaServices } from '../../../services/noticia.service';

@Component({
  selector: 'app-noticias-item',
  templateUrl: './noticias-item.component.html',
  styleUrls: ['./noticias-item.component.css']
})
export class NoticiasItemComponent implements OnInit {
@Input() noticia:Noticia;
@Input() index :number;

  constructor() { }

  ngOnInit() {
  }

 
}

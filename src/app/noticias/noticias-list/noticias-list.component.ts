import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Noticia} from '../noticia.model';  
import { NoticiaServices } from '../../services/noticia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {
 @Output() noticiaWasSelected = new EventEmitter<Noticia>();
 noticias: Noticia[];
 private subscirbe: Subscription;
  constructor(private noticiaService:NoticiaServices, private router: Router,
    private route:ActivatedRoute) { }
 
  ngOnInit() {
  this.noticias = this.noticiaService.getNoticias();
  this.subscirbe= this.noticiaService.noticiasChanged.subscribe((noticias:Noticia[])=>{
    this.noticias=noticias;

  })
  }

 onNewNoticia(){
this.router.navigate(['new'],{relativeTo: this.route});
 }
}

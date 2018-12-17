import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../noticia.model';
import { NoticiaServices } from 'src/app/services/noticia.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias-detail',
  templateUrl: './noticias-detail.component.html',
  styleUrls: ['./noticias-detail.component.css']
})
export class NoticiasDetailComponent implements OnInit {
  noticia: Noticia;
 id: number;
  constructor(private noticiaService: NoticiaServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.noticia= this.noticiaService.getNoticia(this.id);
  });
  }
  onAddToShoppingList(){
    this.noticiaService.addIngredientsToShoppingList(this.noticia.ingredients);
  }
  onEditNoticia(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDelateNoticia(){
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.noticiaService.onDelateNoticia(this.id);
      this.router.navigate(['../'],{relativeTo:this.route});
  });
  }
}

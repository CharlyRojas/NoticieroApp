import { Noticia } from '../noticias/noticia.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { Subject } from 'rxjs';
@Injectable()
export class NoticiaServices {
    noticiasChanged = new Subject<Noticia[]>();
    //noticiasSelected= new EventEmitter<Noticia>();
    private noticias: Noticia[] = [
        new Noticia('Evacuan escuela por volcadura de pipa', '17 de Diciembre de 2018', 'https://www.meganoticias.mx/uploads/noticias/evacuan-escuela-por-volcadura-de-pipa-47553.jpg',
            [new Ingredient('La volcadura de una pipa que transportaba xileno, provocó que una escuela en Esperanza fuera evacuada pues el líquido es flamable los hechos en la autopista Puebla-Veracruz a la altura de Guadalupe Potreros. ', 1)
            ]),
            new Noticia('Cerca de 30 empresas han cerrado: Coparmex', '12 de Diciembre de 2018', 'https://www.meganoticias.mx/uploads/noticias/cerca-de-30-empresas-han-cerrado-coparmex-47379.png',
            [new Ingredient('Benjamín Cruz Huerta presidente de la Confederación Patronal Mexicana delegación Tehuacán, informó que cerca de 30 empresas han cerrado en la región derivado de diferentes causas: tales el incremento en los insumos, así como la inseguridad; agregó que es necesario que esta organización realice un censo para conocer la problemática empresarial que mantiene la ciudad. Benjamín Cruz Huerta presidente de la Confederación Patronal Mexicana delegación Tehuacán, informó que cerca de 30 empresas han cerrado en la región derivado de diferentes causas: tales el incremento en los insumos, así como la inseguridad; agregó que es necesario que esta organización realice un censo para conocer la problemática empresarial que mantiene la ciudad.', 1)
            ]),
            new Noticia('Por taxis irregulares ciudadanía desconfía de taxista', '16 de Diciembre de 2018', 'https://www.meganoticias.mx/uploads/noticias/por-taxis-irregulares-ciudadania-desconfia-de-taxista-47497.jpg',
            [new Ingredient('Conductores del servicio público de Tehuacán han identificado autos particulares rotulados como taxis, situación que ha causado inconformidad, pues refieren que muchos de esos vehículos son usados para delinquir, haciéndose acompañar de personas en motocicletas, y por este problema generalizan a todo el gremio aunque trabaje legalmente, logrando que la ciudadanía desconfíe de los taxistas regulares.', 1)
            ])
    ];
    constructor(private ingredientsService: IngredientsService) { }
    getNoticias() {
        return this.noticias.slice();
    }

    getNoticia(index: number) {
        return this.noticias[index];
    }
    AddNoticia(noticia: Noticia) {
        this.noticias.push(noticia);
        this.noticiasChanged.next(this.noticias.slice());
    }
    updateNoticia(index: number, noticia: Noticia) {
        this.noticias[index] = noticia;
        this.noticiasChanged.next(this.noticias.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
 
    }

    onDelateNoticia(index: number) {

        this.noticias.splice(index, 1);
        this.noticiasChanged.next(this.noticias.slice());


    }
}
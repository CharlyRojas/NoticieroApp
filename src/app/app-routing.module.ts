import {Routes, RouterModule} from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { NoticiaStartComponent } from './noticias/noticia-start/noticia-start.component';
import { NoticiasDetailComponent } from './noticias/noticias-detail/noticias-detail.component';
import { NoticiaEditComponent } from './noticias/noticia-edit/noticia-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
const routes: Routes=[

    {
       
        path:'', redirectTo:'/signin', pathMatch:'full'
    },
    
    {
        path: 'noticias', component:NoticiasComponent

        ,children:[
            {path: 'signin', component: SigninComponent},
             {path:'', component: NoticiaStartComponent},
             {path:'new', component:NoticiaEditComponent},
            { path:':id', component: NoticiasDetailComponent},
            { path:':id/edit', component: NoticiaEditComponent},
            

            ],canActivate:[AuthGuard]
    },
    {
        path: 'shoppinglist', component:ShoppingListComponent
    },
    {
        path: 'signin', component:SigninComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
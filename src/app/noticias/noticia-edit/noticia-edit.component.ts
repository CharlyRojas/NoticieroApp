import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NoticiaServices } from 'src/app/services/noticia.service';
import { Noticia } from '../noticia.model';


@Component({
  selector: 'app-noticia-edit',
  templateUrl: './noticia-edit.component.html',
  styleUrls: ['./noticia-edit.component.css']
})
export class NoticiaEditComponent implements OnInit {
  id: number;
  editMode = false;
  noticiaForm: FormGroup;
  constructor(private route: ActivatedRoute, private NoticiaService: NoticiaServices,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] !=null;
      this.initForm();
    });
  }

  private initForm(){
    let noticiaName ='';
    let noticiaImagePath = '';
    let noticiaDescription ='';
    const ingredients = new FormArray([]);

    if(this.editMode){
      const noticia = this.NoticiaService.getNoticia(this.id);
      noticiaName=noticia.name;
      noticiaImagePath=noticia.imagePath;
      noticiaDescription=noticia.description;
      if(noticia['ingredients']){
        for (const ingredient of noticia.ingredients){
          ingredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name,Validators.required),
              'amount' : new FormControl(ingredient.amount,
                [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }
    }
    
    this.noticiaForm = new FormGroup({
      'name' : new FormControl(noticiaName,Validators.required),
      'imagePath' : new FormControl(noticiaImagePath,Validators.required),
      'description' : new FormControl(noticiaDescription,Validators.required),
      'ingredients' : ingredients
    });
  }
  onAddIngredient(){
    (<FormArray>this.noticiaForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onSubmit(){
    const noticia = this.noticiaForm.value;
    const newNoticia = new Noticia(noticia.name, noticia.description, noticia.imagePath, noticia.ingredients);
    if (this.editMode) {
      this.NoticiaService.updateNoticia(this.id, newNoticia);
      this.onCancel();
    }else{
      this.NoticiaService.AddNoticia(newNoticia);
      this.onCancel();
    }
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.noticiaForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
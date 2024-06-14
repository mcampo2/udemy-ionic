import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { trash } from 'ionicons/icons';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe!: Recipe | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId??'');
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe?.id??'');
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    this.recipesService.deleteRecipe(this.loadedRecipe?.id??'');
    this.router.navigate(['/recipes']);
  } 
}

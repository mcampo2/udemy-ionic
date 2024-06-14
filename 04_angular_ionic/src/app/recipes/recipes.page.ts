import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { RecipeItem } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, RecipeItem]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ngOnInit() {
  }

}

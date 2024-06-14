import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  imports: [IonicModule, RouterModule]
})
export class RecipeItem  implements OnInit {
  @Input() recipeItem?: Recipe;
  
  constructor() { }

  ngOnInit() {}

}

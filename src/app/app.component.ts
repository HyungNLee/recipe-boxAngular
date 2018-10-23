import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  padThaiIncredients: string[] = [
    'Ketchup',
    'More Ketchup',
    'Noodles',
    'Even More Ketchup'
  ];
  padThaiDirections: string[] = [
    'Take ketchup and heat it up.',
    'Go to McDonalds and steal some ketchup packs.',
    'Add noodles and heat with ketchup.'
  ];

  pastaSaladIncredients: string[] = [
    'Pasta',
    'Mayo',
    'Salt',
    'Pepper'
  ];
  pastaSaladDirections: string[] = [
    'Take pasta and boil it.',
    'MIx it with mayo.',
    'Add salt and pepper to taste.'
  ];

  pirozhkyIncredients: string[] = [
    'Russian',
    'Kitchen',
    'Oven',
    'Dough'
  ];
  pirozhkyDirections: string[] = [
    'Take russian.',
    'Place it in the kitchen.',
    'Ask for pirozhky.'
  ];

  recipeList: Recipe[] = [
    new Recipe('Pad Thai', this.padThaiIncredients, this.padThaiDirections),
    new Recipe('Pasta Salad', this.pastaSaladIncredients, this.pastaSaladDirections),
    new Recipe('Pirozhky', this.pirozhkyIncredients, this.pirozhkyDirections)
  ];

  selectedRecipe: Recipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  addIngredient() {
    this.selectedRecipe.ingredients.push("*New Ingredient*");
  }

  addDirection() {
    this.selectedRecipe.directions.push("*New Direction*");
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  trackByFn(index, treatment) {
    return index;
  }
}

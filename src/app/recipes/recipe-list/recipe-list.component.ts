import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //using our own recipe model
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test',
    'https://i.guim.co.uk/img/media/fe24212e5998c82da70c0fec38ce4449eaebb770/0_0_2978_3500/master/2978.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=319579f7d0105d3dd925740feadea582')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

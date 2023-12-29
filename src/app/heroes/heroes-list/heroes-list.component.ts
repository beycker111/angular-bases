import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  heroes = ["Spiderman", "Ironman", "Superman"];
  deletedHero?: string;

  removeLastHero(){
    this.deletedHero = this.heroes.pop();
  }

}

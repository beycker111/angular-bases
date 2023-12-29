import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name: string = "Ironman";
  age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(){
    this.name = "Beycker";
  }

  changeAge(){
    this.age = 30;
  }

  resetForm(){
    this.name = "ironman";
    this.age = 45;
  }
}

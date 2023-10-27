import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "IroMan";
  public age: number = 45;

  //#region getter
  get capitalizeName(): string{
    return this.name.toUpperCase()
  }
  //#endregion

  //#region Métodos
  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  public changeHero(): void{
    this.name = 'Spiderman';
  }

  public changeAge(): void{
    this.age = 29;
  }
  //#endregion

}

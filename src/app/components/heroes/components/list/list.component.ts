import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman','Hulk','Thor','Iroman'];
  public heroDelete: string = "";

  deleteLastHero(): void{
    let heroe = this.heroes.pop()!;
    this.heroDelete = heroe;
  }
}

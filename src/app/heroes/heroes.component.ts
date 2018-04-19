import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        console.log('Clicked a hero = ' + 'Selected hero is "' + this.selectedHero + '" & hero is "' + JSON.stringify(hero) + '"');
        this.selectedHero = hero;
    }
}

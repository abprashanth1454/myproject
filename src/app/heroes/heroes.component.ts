import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService) { }

    heroes: Hero[];

    ngOnInit() {
        console.log('ngOnInit');
        this.getHeroes();
    }
    
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
}

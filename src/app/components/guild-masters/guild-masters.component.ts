import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-guild-masters',
  templateUrl: './guild-masters.component.html',
  styleUrls: ['./guild-masters.component.scss']
})
export class GuildMastersComponent implements OnInit {

  availableHeroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.generateHeroes();
  }

  generateHeroes() {
    for (let i = 0; i < 5; i++) {
      this.availableHeroes.push(this.heroService.getNewHero());
    }
  }

}

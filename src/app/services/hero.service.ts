import { Injectable } from '@angular/core';
import { IHero } from '../models/hero.model';
import * as chance from 'chance';
import { HeroTypesList } from '../models/hero-types.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getNewHero(): IHero {
    const dice = new chance.Chance();

    const newHero: IHero = {
      name: dice.name(),
      id: dice.guid(),
      type: dice.pickone(HeroTypesList)
    };

    return newHero;
  }

  constructor() { }
}

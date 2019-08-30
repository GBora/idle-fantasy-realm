import { IHeroType } from './hero-types.model';

export interface IHero {
    name: string;
    id: any;
    type: IHeroType;
}

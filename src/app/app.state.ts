import { IQuest } from './models/quest.model';
import { IHero } from './models/hero.model';

export interface AppState {
    readonly questsAccepted: IQuest;
    readonly heroesRecruited: IHero;
}

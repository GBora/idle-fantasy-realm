import { IQuestEnemy } from './quest-enemies.model';
import { IQuestSubject } from './quest-subjects.model';
import { IQuestVerb } from './quest-verbs.model';

export interface IQuest {
    enemy: IQuestEnemy;
    subject: IQuestSubject;
    verb: IQuestVerb;
    completeDescription: string;
    id: any;
}

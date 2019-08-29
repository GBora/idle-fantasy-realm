import { Injectable } from '@angular/core';
import * as chance from 'chance';

import { IQuest } from '../models/quest.model';
import { QuestEnemyTable } from '../models/quest-enemies.model';
import { QuestSubjectTable } from '../models/quest-subjects.model';
import { QuestVerbTable } from '../models/quest-verbs.model';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor() { }

  generateNewQuest(): IQuest {
    const dice = new chance.Chance();

    const newQuest: IQuest = {
      id: Date.now().toString(10),
      enemy: null,
      subject: null,
      verb: null,
      completeDescription: ''
    };

    newQuest.enemy = dice.pickone(QuestEnemyTable);
    newQuest.subject = dice.pickone(QuestSubjectTable);
    newQuest.verb = dice.pickone(QuestVerbTable);

    newQuest.completeDescription = newQuest.verb.description;
    newQuest.completeDescription = newQuest.completeDescription.replace('{subject}', newQuest.subject.name);
    newQuest.completeDescription = newQuest.completeDescription.replace('{enemy}', newQuest.enemy.name);

    return newQuest;
  }
}

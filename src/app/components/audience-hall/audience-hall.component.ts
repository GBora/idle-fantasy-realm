import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { IQuest } from 'src/app/models/quest.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddQuest } from '../../actions/quest.actions';

@Component({
  selector: 'app-audience-hall',
  templateUrl: './audience-hall.component.html',
  styleUrls: ['./audience-hall.component.scss']
})
export class AudienceHallComponent implements OnInit {

  availableQuests: IQuest[] = [];

  constructor(private questService: QuestService, private store: Store<AppState>) { }

  ngOnInit() {
    this.generateNewQuests();
  }

  generateNewQuests() {
    this.availableQuests = [];

    for (let i = 0; i < 3; i++) {
      this.availableQuests.push(this.questService.generateNewQuest());
    }
  }

  acceptQuest(quest: IQuest) {
    this.availableQuests = this.availableQuests.filter((availableQuest: IQuest) => availableQuest !== quest);
    this.store.dispatch(new AddQuest(quest));
  }

}

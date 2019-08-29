import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { IQuest } from 'src/app/models/quest.model';

@Component({
  selector: 'app-audience-hall',
  templateUrl: './audience-hall.component.html',
  styleUrls: ['./audience-hall.component.scss']
})
export class AudienceHallComponent implements OnInit {

  availableQuests: IQuest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.generateNewQuests();
    console.log(this.availableQuests);
  }

  generateNewQuests() {
    this.availableQuests = [];

    for (let i = 0; i < 3; i++) {
      this.availableQuests.push(this.questService.generateNewQuest());
    }
  }

}

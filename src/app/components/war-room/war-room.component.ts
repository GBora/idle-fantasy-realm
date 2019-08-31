import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { IQuest } from 'src/app/models/quest.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-war-room',
  templateUrl: './war-room.component.html',
  styleUrls: ['./war-room.component.scss']
})
export class WarRoomComponent implements OnInit {

  quests: Observable<IQuest[]>;

  constructor(private store: Store<AppState>) {
    this.quests = store.select('quests');
  }

  ngOnInit() {
  }

}

import { IQuest } from '../models/quest.model';
import * as QuestActions from './../actions/quest.actions'

export function reducer(state: IQuest[] = [], action: QuestActions.Actions) {

    switch (action.type) {
        case QuestActions.ADD_QUEST:
            return [...state, action.payload];
        default:
            return state;
    }
}

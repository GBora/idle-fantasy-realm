import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IQuest } from '../models/quest.model';

export const ADD_QUEST = '[QUEST] ADD';

export class AddQuest implements Action {
    readonly type = ADD_QUEST;

    constructor(public payload: IQuest) {}
}

export type Actions = AddQuest;

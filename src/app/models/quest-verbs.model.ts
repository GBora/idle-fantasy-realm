export interface IQuestVerb {
    id: number;
    name: string;
    description: string;
}

export const QuestVerbTable: IQuestVerb[] = [
    {
        name: 'Defend',
        description: `Defend the {subject} from the raids by the {enemy}.`,
        id: 0
    },
    {
        name: 'Save',
        description: `The {subject} has been captured by the {enemy}, we need to act.`,
        id: 1
    },
    {
        name: 'Eliminate',
        description: `We must strike at the {subject} of the {enemy} and destroy them.`,
        id: 2
    },
    {
        name: 'Purge',
        description: `For far too long we have suffered the {subject} of the insidious {enemy}, we must cleanse them.`,
        id: 3
    }
];

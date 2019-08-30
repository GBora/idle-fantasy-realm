export interface IHeroType {
    name: string;
    description: string;
    id: number;
    //TODO: figure how to implement this
    quest: (arg: any) => any;
}

export const HeroTypesList: IHeroType[] = [
    {
        name: 'Mage',
        description: 'A wielder of the Arcane Arts, pottent but at the risk of using inherently corruptive powers.',
        id: 0,
        quest: null
    },
    {
        name: 'Witchhunter',
        description: 'A hunter of things that should not be, they root out corruption by any means.',
        id: 1,
        quest: null
    },
    {
        name: 'Priest',
        description: 'A believer of the gods, endowned with their powers to better this world in their gods image.',
        id: 2,
        quest: null
    }
];

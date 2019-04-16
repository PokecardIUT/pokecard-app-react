
export interface Attack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
}

export interface Weakness {
    type: string;
    value: string;
}

export interface Cards {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    hp: string;
    imageUrl: string;
    imageUrlHiRes: string;
    types: string[];
    number: string;
    subtype: string;
    supertype: string;
    attacks: Attack[];
    text: any[];
    weaknesses: Weakness[];
    resistances: any[];
    retreatCost: string[];
    convertedRetreatCost: number;
    artist: string;
    set: string;
    setCode: string;
    rarity: string;
}
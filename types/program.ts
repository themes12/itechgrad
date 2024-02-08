import { Degree } from "./degree";
import { Plans } from "./plans";

export interface ProgramAttributes {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    locale?: string;
    plans: Plans;
    degree: {
        data: Degree;
    };
    localizations: Localizations;
}

export interface Program {
    id: number;
    attributes: ProgramAttributes;
}

export interface Programs {
    data: Program[];
}

export interface LocalizationAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    plans:      Plans;
}

export interface Localization {
    id:         number;
    attributes: LocalizationAttributes;
}

export interface Localizations {
    data: Localization[];
}
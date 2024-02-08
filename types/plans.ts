import { Sections } from "./section";

export interface PlansAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    sections:    Sections;
}

export interface Plan {
    id:         number;
    attributes: PlansAttributes;
}

export interface Plans {
    data: Plan[];
}

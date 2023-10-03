export interface Degree {
    "master-degree": string;
    phd: string;
}

export interface Course {
    _id: string;
    degree?: string;
    name_en: string;
    name_th: string;
    credit: {
        total: number;
        lecture: number;
        lab: number;
        independent_study: number;
    };
    prerequisite?: Array<string | Array<string>>;
    description_en: string;
    description_th: string;
    is_show?: Boolean;
}

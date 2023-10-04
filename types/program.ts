export type ContentType = {
    en: {
        name: string;
        html: string;
    };
    th: {
        name: string;
        html: string;
    };
};

export type ProgramType = {
    content?: Array<ContentType>;
    name_en: string;
    name_th: string;
};

export interface Program {
    _id?: string;
    degree?: string;
    type?: Array<ProgramType>;
    name_en: string;
    name_th: string;
}

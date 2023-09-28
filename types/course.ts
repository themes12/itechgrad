export interface Degree {
    "master-degree": string,
    "phd": string,
}

export interface Course {
  _id: string,
  degree: string,
  name_en: string,
  name_th: string,
  credit: {
    total: number,
    lecture: number,
    lab: number,
    independent_study: number,
  },
  prerequisite: Array<string | Array<string>> | Array<null>,
  description_en: String,
  description_th: String,
  is_show?: Boolean,
}

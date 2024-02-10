// export interface StaffTypes {
//     "academic": string,
//     "support": string,
// }

// export type CardStaffProps = "academic" | "support"

// export type StaffPageProps = { type: "academic" | "support" }

// export type AcademicStaff = {
//     _id: string;
//     title: string;
//     e_title: string;
//     name: string;
//     e_name: string;
//     tel: string[];
//     email: string[];
//     position: string[];
//     e_position: string[];
//     affiliation: string;
//     e_affiliation: string;
//     picture: string;
//     job_type: "L";
//     e_id: number;
//     personal_web: string;
//     research_interest: string
// };

// export type SupportStaff = {
//     _id: string;
//     title: string;
//     e_title: string;
//     name: string;
//     e_name: string;
//     tel: string[];
//     email: string[];
//     position: string[];
//     e_position: string[];
//     affiliation: string;
//     e_affiliation: string;
//     picture: string;
//     job_type: "S";
//     e_id: number;
// };

export type StaffTypes = "lecturer" | "support"

export interface Staffs {
    data: Staff[];
}

export interface Staff {
    id:         number;
    attributes: StaffAttributes;
}

export interface StaffAttributes {
    name:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       string;
    title:        string;
    affiliation:  string;
    job_type:     StaffTypes;
    personal_web: null | string;
}
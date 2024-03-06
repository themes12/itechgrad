export interface DegreeCourse {
    id:         number;
    attributes: DegreeCourseAttributes;
}

export interface DegreeCourseAttributes {
    general_name:   string;
    courses: Courses;
}

export interface Courses {
    data: Course[];
}

export interface Course {
    id:         number;
    attributes: CourseAttributes;
}

export interface CourseAttributes {
    course_id:      string;
    name_en:        string;
    name_th:        string;
    prerequisite:   Array<string[] | string>;
    description_en: null | string;
    description_th: null | string;
    is_open:        boolean;
    credit:         Credit;
}

export interface Credit {
    id:                number;
    total:             number;
    lecture:           number;
    lab:               number;
    independent_study: number;
}

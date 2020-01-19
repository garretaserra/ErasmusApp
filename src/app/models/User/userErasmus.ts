import {Language} from "../language";

export class UserErasmus {
    age: string;
    course: string;
    homeUniversity: string;
    destUniversity: string;
    languages: Language[];

    constructor(age: string, course: string, homeUniversity: string, destUniversity: string, languages: Language[]) {
        this.age = age;
        this.course = course;
        this.homeUniversity = homeUniversity;
        this.destUniversity = destUniversity;
        this.languages = languages;
    }
}

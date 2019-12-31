export class UserErasmus {
    age: string;
    lprocedencia: string;
    uniprocedencia: string;
    curso: string;
    ldestino: string;
    unidestino: string;

    constructor( age = '', lprocendencia = '', uniprocedencia = '', curso = '', ldestino = '', unidestino = '') {
       this.age = age;
       this.lprocedencia = lprocendencia;
       this.uniprocedencia = uniprocedencia;
       this.curso = curso;
       this.ldestino = ldestino;
       this.unidestino = unidestino;
    }
}

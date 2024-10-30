import {Injectable} from '@angular/core';
import {delay, Observable, of, throwError, map, catchError} from "rxjs";
import {Student} from "../models/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    constructor(private httpClient: HttpClient) {
    }


    getActiveStudents(): Observable<Student[]> {
        //STUDENTS_DB = STUDENTS_DB.filter(s => s.isActive);
        //return of(STUDENTS_DB).pipe(delay(rndTime()));
        return this.httpClient.get<Student[]>('http://localhost:3000/students').pipe(map(
            (students: Student[]) => students.filter(s => s.isActive)
        ))
    }

    deleteStudent(id: string): Observable<Student[]> {
        // STUDENTS_DB = STUDENTS_DB.map(s =>
        //     s.id === id ? {...s, isActive: false, updatedAt: new Date()} : s
        // ).filter(s => s.isActive);
        // return of(STUDENTS_DB).pipe(delay(rndTime(.3)));
        return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, {isActive: false});
    }

    updateStudent(id: string, result: Partial<Student>): Observable<Student[]> {
        // STUDENTS_DB = STUDENTS_DB.map(s =>
        //     s.id === id ? {...s, ...result, updatedAt: new Date()} : s
        // ).filter(s => s.isActive);
        // return of(STUDENTS_DB).pipe(delay(rndTime(.5)));
        return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, result);
    }

    addStudent(result: Student): Observable<Student[]> {
        const newStudent: Student = {
            ...result,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        // STUDENTS_DB = [...STUDENTS_DB, newStudent];
        // return of(STUDENTS_DB).pipe(delay(rndTime(.7)));
        return this.httpClient.post<Student[]>('http://localhost:3000/students', newStudent);
    }

    activateStudent(id: string): Observable<Student[]> {
        // STUDENTS_DB = STUDENTS_DB.map(s =>
        //     s.id === id ? {...s, isActive: true, updatedAt: new Date()} : s
        // ).filter(s => !s.isActive);
        // return of(STUDENTS_DB).pipe(delay(rndTime(.5)));
        return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, {isActive: true});
    }

    getInactiveStudents(): Observable<Student[]> {
        // STUDENTS_DB = STUDENTS_DB.filter(s => !s.isActive);
        // return of(STUDENTS_DB).pipe(delay(rndTime()));
        return this.httpClient.get<Student[]>(`http://localhost:3000/students`).pipe(map(
            (students: Student[]) => students.filter(s => !s.isActive)
        ))
    }

    getStudentById(id: string): Observable<Student> {
        // const student: Student | undefined = STUDENTS_DB.find(s => s.id === id);
        // if (student) {
        //     return of(student).pipe(delay(rndTime()));
        // } else {
        //     return throwError(() => new Error('Alumno no encontrado'));
        // }

        return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`)
            .pipe(
                catchError(error => {
                    console.error('Error al obtener el alumno:', error);
                    return throwError(() => new Error('Alumno no encontrado'));
                })
            );
    }
}

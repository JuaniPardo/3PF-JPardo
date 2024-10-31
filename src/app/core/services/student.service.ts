import {Injectable} from '@angular/core';
import {Observable, throwError, map, catchError} from "rxjs";
import {Student} from "../models/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
   providedIn: 'root'
})
export class StudentsService {
   constructor(private httpClient: HttpClient) {
   }

   getActiveStudents(): Observable<Student[]> {
      return this.httpClient.get<Student[]>('http://localhost:3000/students').pipe(
         map((students: Student[]) => students.filter(s => s.isActive)),
         catchError(error => {
            console.error('Error al obtener los alumnos activos:', error);
            return throwError(() => new Error('No se pudieron obtener los alumnos activos'));
         })
      );
   }

   deleteStudent(id: string): Observable<Student[]> {
      return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, {isActive: false, updatedAt: new Date()}).pipe(
         catchError(error => {
            console.error('Error al eliminar el alumno:', error);
            return throwError(() => new Error('No se pudo eliminar el alumno'));
         })
      );
   }

   updateStudent(id: string, result: Partial<Student>): Observable<Student[]> {
      const updatedData = {...result, updatedAt: new Date()};
      return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, updatedData).pipe(
         catchError(error => {
            console.error('Error al actualizar el alumno:', error);
            return throwError(() => new Error('No se pudo actualizar el alumno'));
         })
      );
   }

   createStudent(result: Student): Observable<Student[]> {
      const newStudent: Student = {
         ...result,
         isActive: true,
         createdAt: new Date(),
         updatedAt: new Date()
      };
      return this.httpClient.post<Student[]>('http://localhost:3000/students', newStudent).pipe(
         catchError(error => {
            console.error('Error al crear el alumno:', error);
            return throwError(() => new Error('No se pudo crear el alumno'));
         })
      );
   }

   activateStudent(id: string): Observable<Student[]> {
      return this.httpClient.patch<Student[]>(`http://localhost:3000/students/${id}`, {isActive: true}).pipe(
         catchError(error => {
            console.error('Error al activar el alumno:', error);
            return throwError(() => new Error('No se pudo activar el alumno'));
         })
      );
   }

   getInactiveStudents(): Observable<Student[]> {
      return this.httpClient.get<Student[]>(`http://localhost:3000/students`).pipe(
         map((students: Student[]) => students.filter(s => !s.isActive)),
         catchError(error => {
            console.error('Error al obtener los alumnos inactivos:', error);
            return throwError(() => new Error('No se pudieron obtener los alumnos inactivos'));
         })
      );
   }

   getStudentById(id: string): Observable<Student> {
      return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`).pipe(
         catchError(error => {
            console.error('Error al obtener el alumno:', error);
            return throwError(() => new Error('Alumno no encontrado'));
         })
      );
   }
}

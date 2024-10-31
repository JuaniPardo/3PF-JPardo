import {Injectable} from '@angular/core';
import {Enrollment} from "../models/enrollment";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

let ENROLLMENTS_DB: Enrollment[] = [
   {
      id: "1",
      studentId: "1",
      courseId: "1",
      isActive: true,
      enrollmentDate: new Date('2023-08-15'),
      updatedAt: new Date('2023-09-10')
   },
   {
      id: "2",
      studentId: "2",
      courseId: "1",
      isActive: true,
      enrollmentDate: new Date('2023-02-01'),
      updatedAt: new Date('2023-05-20')
   },
   {
      id: "3",
      studentId: "3",
      courseId: "2",
      isActive: true,
      enrollmentDate: new Date('2023-01-22'),
      updatedAt: new Date('2023-01-25'),
   },
   {
      id: "4",
      studentId: "4",
      courseId: "1",
      isActive: true,
      enrollmentDate: new Date('2023-01-28'),
      updatedAt: new Date('2023-01-30'),
   }
];

@Injectable({
   providedIn: 'root'
})
export class EnrollmentService {

   constructor(private httpClient: HttpClient) {
   }

   getActiveEnrollments(): Observable<Enrollment[]> {
      return this.httpClient.get<Enrollment[]>('http://localhost:3000/enrollments').pipe(
         map((enrollments: Enrollment[]) => enrollments.filter(e => e.isActive)),
         catchError(error => {
            console.error('Error al obtener los alumnos activos:', error);
            return throwError(() => new Error('No se pudieron obtener los alumnos activos'));
         })
      );
   }

   getEnrollmentsByStudentId(studentId: string): Observable<Enrollment[]> {
      return this.httpClient.get<Enrollment[]>(`http://localhost:3000/enrollments`).pipe(
         map((enrollments: Enrollment[]) => enrollments.filter(e => e.studentId === studentId)),
         catchError(error => {
            console.error('Error al obtener los alumnos:', error);
            return throwError(() => new Error('No se pudieron obtener los alumnos'));
         })
      );
   }

   getEnrollmentsByCourseId(courseId: string): Observable<Enrollment[]> {
      return this.httpClient.get<Enrollment[]>(`http://localhost:3000/enrollments/${courseId}`).pipe(
         catchError(error => {
            console.error('Error al obtener los cursos:', error);
            return throwError(() => new Error('No se pudieron obtener los cursos'));
         })
      );
   }

   enrollStudent(enrollment: Omit<Enrollment, 'id' | 'isActive' | 'enrollmentDate' | 'updatedAt'>): Observable<Enrollment[]> {
      const newEnrollment: Omit<Enrollment, 'id'> = {
         courseId: enrollment.courseId,
         studentId: enrollment.studentId,
         isActive: true,
         enrollmentDate: new Date(),
         updatedAt: new Date()
      };
      return this.httpClient.post<Enrollment[]>('http://localhost:3000/enrollments', newEnrollment).pipe(
         catchError(error => {
            console.error('Error al agregar alumno:', error);
            return throwError(() => new Error('No se pudo agregar alumno'));
         })
      );
   }

   unenrollStudent(studentId: string, courseId: string): Observable<Enrollment[]> {
      return this.httpClient.patch<Enrollment[]>(`http://localhost:3000/enrollments/${studentId}/${courseId}`, {isActive: false}).pipe(
         catchError(error => {
            console.error('Error al eliminar alumno:', error);
            return throwError(() => new Error('No se pudo eliminar alumno'));
         })
      );
   }
}



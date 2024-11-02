import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, filter, map, Observable, of, tap, throwError} from "rxjs";
import {User} from "../models/user";

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private apiUrl = 'http://localhost:3000/users';
   private currentUser: User | null = null;

   constructor(private httpClient: HttpClient) {
   }

   register(user: Omit<User, 'id'>): Observable<User> {
      return this.httpClient.post<User>(this.apiUrl, user).pipe(
         tap((newUser: User) => {
            this.currentUser = newUser;
         }),
         catchError(error => {
            console.error('Error al registrar usuario:', error);
            throw error;
         })
      );
   }

   login(email: string, password: string): Observable<User | null> {
      return this.httpClient.get<User[]>(`${this.apiUrl}`, {params: {email, password}}).pipe(
         map((users: User[]) => {
            if (!!users[0]) {
               this.currentUser = users[0];
               //localStorage.setItem('token', this.currentUser.token);
               console.log('Usuario iniciado sesión:', this.currentUser);
               return this.currentUser;
            } else {
               return null;
            }
         }),
         catchError((error) => {
            console.error('Error al iniciar sesión:', error);
            return throwError(() => new Error('No se pudo iniciar sesión'));
         })
      );
   }

   logout(): void {
      this.currentUser = null;
   }

   getCurrentUser(): User | null {
      return this.currentUser;
   }

   isLoggedIn(): boolean {
      return !!this.currentUser;
   }


}

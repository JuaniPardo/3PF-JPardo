import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError, BehaviorSubject} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private apiUrl = 'http://localhost:3000/users';
   private _authUser = new BehaviorSubject<User | null>(null);
   public readonly authUser$ = this._authUser.asObservable();

   constructor(private httpClient: HttpClient) {
   }

   register(user: Omit<User, 'id'>): Observable<User> {
      return this.httpClient
         .post<User>(this.apiUrl, user)
         .pipe(
            tap((newUser: User) => {
               this._authUser.next(newUser);
            }),
            catchError(error => {
               return throwError(() => new Error(`Error al registrar usuario: ${error.message}`));
            })
         );
   }

   login(email: string, password: string): Observable<User | null> {
      return this.httpClient
         .get<User[]>(`${this.apiUrl}`, {params: {email, password}})
         .pipe(
            map((users: User[]) => {
               if (!!users[0]) {
                  const user = users[0];
                  this._authUser.next(user);
                  //localStorage.setItem('token', this.currentUser.token);
                  return user;
               } else {
                  return null;
               }
            }),
            catchError((error) => {
               return throwError(() => new Error(`No se pudo iniciar sesión: ${error.message}`));
            })
         );
   }

   logout(): void {
      this._authUser.next(null);
   }

}

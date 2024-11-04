import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError, BehaviorSubject, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private apiUrl = 'http://localhost:3000/users';
   private _authUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
   public readonly authUser$: Observable<User | null> = this._authUser$.asObservable();

   constructor(private httpClient: HttpClient) {}

   register(user: Omit<User, 'id'>): Observable<User> {
      return this.httpClient
         .post<User>(this.apiUrl, user)
         .pipe(
            tap((newUser: User) => {
               this._authUser$.next(newUser);
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
                  const user: User = users[0];
                  localStorage.setItem('token', user.token);
                  this._authUser$.next(user);
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
      this._authUser$.next(null);
      localStorage.removeItem('token');
   }

   verifyToken(): Observable<boolean> {
      const usertoken = localStorage.getItem('token');
      return this.httpClient.get<User[]>(`${this.apiUrl}?token=${usertoken}`).pipe(
         map((users: User[]) => {

            if (!!users[0]) {
               this._authUser$.next(users[0]);
               return true;
            }
            return false;
         }),
         catchError((error) => {
            return throwError(() => new Error(`No se pudo iniciar sesión: ${error.message}`));
         })
      );

      // const isValid = localStorage.getItem('token') === this.authUser.token;
      // if (isValid) {
      //    this._authUser.next(this.authUser);
      // } else {
      //    this._authUser.next(null);
      // }
      // return of(isValid);
   }

}

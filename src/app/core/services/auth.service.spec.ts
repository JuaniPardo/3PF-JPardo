import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {AuthService} from "./auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {User} from "../models/user";
import {MockProvider} from "ng-mocks";
import {NavigationExtras, Router} from "@angular/router";

const mockAuthData: User = {
   id: "dsfsf",
   firstName: "Juan",
   lastName: "Pardo",
   email: "juani.pardo@icloud.com",
   password: "1234",
   token: "sdjkfhdsjf",
   isActive: true,
   role: "ADMIN",
   createdAt: new Date(),
   updatedAt: new Date()

}

fdescribe('AuthService', () => {

   let service: AuthService;
   let httpController: HttpTestingController;
   let router: Router;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [AuthService,
            MockProvider(Router, {
               navigate: (commands: any[], extras?: NavigationExtras) => {
                  return new Promise(resolve => resolve(true));
               }
            })]
      })

      service = TestBed.inject(AuthService);
      httpController = TestBed.inject(HttpTestingController);
      router = TestBed.inject(Router);
      localStorage.clear();
   });

   afterEach(() => {
      httpController.verify();
      localStorage.clear();
   });

   it('should be defined', () => {
      expect(service).toBeTruthy();
   });

   it('should login', fakeAsync(() => {
      service.login(mockAuthData.email, mockAuthData.password).subscribe({
         next: (user) => {
            expect(user).toEqual(mockAuthData);
            expect(localStorage.getItem('token')).toEqual(mockAuthData.token);
         },
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
         method: 'GET',
      });
      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush([mockAuthData]);
      tick();
   }));

   it('should not login', fakeAsync(() => {
      service.login(mockAuthData.email, mockAuthData.password).subscribe({
         next: (user) => {
            expect(user).toBeNull();
         },
         error: (error) => {
            expect(error.message).toBe('No se pudo iniciar sesión');

         },
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
         method: 'GET',
      });
      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush([], {status: 401, statusText: 'Unauthorized'});
      tick();
   }));

   it('should logout', fakeAsync(() => {
      const spyOnNavigate = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

      service.login(mockAuthData.email, mockAuthData.password).subscribe();

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      });
      mockRequest.flush([mockAuthData]);

      service.logout();
      tick();
      expect(localStorage.getItem('token')).toBeNull();
      service.authUser$.subscribe({
         next: (user) => {
            expect(user).toBeNull();
         },
      });

      expect(spyOnNavigate).toHaveBeenCalledWith(['/welcome']);
   }));

   it('should register a new user', fakeAsync(() => {
      service.register(mockAuthData).subscribe(user => {
         expect(user).toEqual(mockAuthData);
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}`,
         method: 'POST'
      });

      expect(mockRequest.request.method).toBe('POST');
      expect(mockRequest.request.body).toEqual(mockAuthData);

      mockRequest.flush(mockAuthData);
      tick();
   }));

   it('should handle error on register', fakeAsync(() => {
      service.register(mockAuthData).subscribe({
         next: () =>{
            fail('No se debería haber producido ningún error');
         },
         error: (error) => {
            expect(error.message).toBe('No se pudo registrar el usuario');
         }
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}`,
         method: 'POST'
      });
      expect(mockRequest.request.method).toBe('POST');
      expect(mockRequest.request.body).toEqual(mockAuthData);
   }));

   it('should verify token', fakeAsync(() => {
      service.login(mockAuthData.email, mockAuthData.password).subscribe();

      const loginRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
         method: 'GET'
      });
      expect(loginRequest.request.method).toBe('GET');
      loginRequest.flush([mockAuthData]);
      tick();

      service.verifyToken().subscribe({
         next: (isValid) => {
            expect(isValid).toBe(true);
         },
         error: (error) => {
            fail(error);
         }
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?token=${mockAuthData.token}`,
         method: 'GET'
      });
      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush([mockAuthData]);
      tick();
   }));

   it('should handle error on verify token', fakeAsync(() => {
      const invalidToken = 'invalidToken';
      localStorage.setItem('token', invalidToken);

      service.verifyToken().subscribe({
         next: (isValid) => {
            expect(isValid).toBe(false);
         },
         error: (error) => {
            fail('Error al verificar token');
         },
      });


      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?token=${invalidToken}`,
         method: 'GET'
      });

      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush([], {status: 401, statusText: 'Unauthorized'});
      tick();
   }));

   it ('should return false if no token is present', fakeAsync(() => {
      localStorage.removeItem('token');
      service.verifyToken().subscribe({
         next: (isValid) => {
            expect(isValid).toBe(false);
         },
         error: (error) => {
            fail('Error al verificar token');
         },
      });

      httpController.expectNone(`${environment.USERS_URL}?token=null`);
      tick();
   }));

});

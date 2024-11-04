import {TestBed} from "@angular/core/testing";
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

describe('AuthService', () => {

   let service: AuthService;
   let httpController: HttpTestingController;
   let router: Router;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [AuthService,
         MockProvider(Router, {navigate: (commands: any[], extras?: NavigationExtras) => {
            return new Promise(resolve => resolve(true));
            }})]
      })

      service = TestBed.inject(AuthService);
      httpController = TestBed.inject(HttpTestingController);
      router = TestBed.inject(Router);
   });

   afterEach(() => {
      httpController.verify();
      localStorage.clear();
   });

   it('should be defined', () => {
      expect(service).toBeTruthy();
   });

   it('should login', (done) => {
      service.login(mockAuthData.email, mockAuthData.password).subscribe({
         next: (user) => {
            expect(user).toEqual(mockAuthData);
            expect(localStorage.getItem('token')).toEqual(mockAuthData.token);
            done();
         },
      });

     const mockRequest = httpController.expectOne({
        url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
     });
      mockRequest.flush([mockAuthData]);
   });

   it('should not login', (done) => {
      service.login(mockAuthData.email, mockAuthData.password).subscribe({
         error: (error) => {
            expect(error.message).toBe('No se pudo iniciar sesión');
            done();
         },
      });

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      });
      mockRequest.flush([], {status: 401, statusText: 'Unauthorized'});
   });

   it('should logout', (done) => {
      const spyOnNavigate = spyOn(router, 'navigate');

      service.login(mockAuthData.email, mockAuthData.password).subscribe();

      const mockRequest = httpController.expectOne({
         url: `${environment.USERS_URL}?email=${mockAuthData.email}&password=${mockAuthData.password}`,
      });
      mockRequest.flush([mockAuthData]);

      service.logout();
      expect(localStorage.getItem('token')).toBeNull();
      service.authUser$.subscribe({
         next: (user) => {
            expect(user).toBeNull();
            done();
         },
      });

      expect(spyOnNavigate).toHaveBeenCalledWith(['/welcome']);
   });

});

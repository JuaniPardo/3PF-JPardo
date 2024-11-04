import {TestBed} from "@angular/core/testing";
import {AuthService} from "./auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AuthService', () => {

   let service: AuthService;
   let httpControllet: HttpTestingController;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [AuthService]
      })

      service = TestBed.inject(AuthService);
   });

   it('should be defined', () => {
      expect(service).toBeTruthy();
   });

   /*it('should login', () => {
     const mockRequest = httpControllet.expectOne('http://localhost:3000/users');
   });*/
})

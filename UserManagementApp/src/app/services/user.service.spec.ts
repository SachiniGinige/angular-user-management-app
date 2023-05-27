import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// describe('UserService', () => {
//   let service: UserService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should register a new user', () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    userService.Register(mockUser).subscribe(response => {
      expect(response).toEqual({ success: true });
    });

    const req = httpTestingController.expectOne('/api/users/register');
    expect(req.request.method).toEqual('POST');
    req.flush({ success: true });
  });

  it('should handle registration failure', () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    userService.Register(mockUser).subscribe(
      () => {},
      error => {
        expect(error).toEqual('Registration failed');
      }
    );

    const req = httpTestingController.expectOne('/api/users/register');
    expect(req.request.method).toEqual('POST');
    req.error(new ErrorEvent('Registration failed'));
  });

});
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserRegisterComponent } from './user-register.component';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

// describe('UserRegisterComponent', () => {
//   let component: UserRegisterComponent;
//   let fixture: ComponentFixture<UserRegisterComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserRegisterComponent]
//     });
//     fixture = TestBed.createComponent(UserRegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegisterComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should register a new user', fakeAsync(() => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    // Trigger registration
    component.RegisterUser();

    // Simulate HTTP request
    const req = httpTestingController.expectOne('/api/users/register');
    expect(req.request.method).toEqual('POST');
    req.flush({ success: true });

    // Advance to the response
    tick();

    // Assert the success message or any other behavior
    // expect(component.registrationSuccess).toBeTrue();
    // // ... additional assertions
  }));

  it('should handle registration failure', fakeAsync(() => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    // Trigger registration
    component.RegisterUser();

    // Simulate HTTP request
    const req = httpTestingController.expectOne('/api/users/register');
    expect(req.request.method).toEqual('POST');
    req.error(new ErrorEvent('registration failed'));

    // Advance to the response
    tick();

    // Assert the failure message or any other behavior
    // expect(component.registrationError).toBeTrue();
    // // ... additional assertions
  }));

});
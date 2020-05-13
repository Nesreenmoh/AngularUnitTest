import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { AuthenticationService } from '../services/authentication.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let authService: AuthenticationService;
  // let h3 = HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // return an instance of the service
    authService = TestBed.get(AuthenticationService);

    // h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the value "The user is authenticated and Logged in"', () => {
    // to check if this method in this service has been called
    spyOn(authService, 'checkAuthentication').and.returnValue(false);
    let str = component.loggedIn();
    expect(str).toEqual('Not authenticated');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should return the value of h1', () => {
    component.checkLogin();
    fixture.detectChanges();
    expect('The user is authenticated and Logged in').toBe(component.checkLoggin);
  });

  // check if the value of the instance is from serivce * way of inject dependencies
  it('should check the service ', () => {
    expect(authService instanceof AuthenticationService).toBeTruthy();
  });

  it('should inject serivce using inject function and check its instance', inject(
    [AuthenticationService],
    (injectService: AuthenticationService) => {
      expect(injectService).toBeTruthy();
      expect(injectService instanceof AuthenticationService).toBeTruthy();
    }
  ));
});

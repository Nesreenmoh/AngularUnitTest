import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { AuthenticationService } from '../services/authentication.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    // create an entryto the module of the app
    TestBed.configureTestingModule({
      //declare the component that you want to test
      declarations: [UserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    authService = TestBed.get(AuthenticationService);
    // creating an instance of the component
    component = fixture.componentInstance;
    fixture.detectChanges();
    // return an instance of the service
    authService = TestBed.get(AuthenticationService);
  });

  it('the test should create the app', () => {
    // check if the app is exist
    expect(component).toBeTruthy();
  });

  it('should return the value "The user is authenticated and Logged in"', () => {
    // to check if this method in this service has been called
    spyOn(authService, 'checkAuthentication').and.returnValue(false);
    let str = component.loggedIn();
    expect(str).toEqual('Not authenticated');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should return the value of h1 be the same as the checkLogin variable', () => {
    component.checkLogin();
    fixture.detectChanges();
    // this will return the whole dom objects in the HTML
    let compile = fixture.debugElement.nativeElement;
    // we select only the h3 tag and check its textContent
    expect(compile.querySelector('h3').textContent).toBe(component.checkLoggin);
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

  //check if the user name in the app is the same as in the serivce
  it('should use the user name from the serivce', () => {
    expect(authService.user.name).toEqual(component.user.name);
  });

  it('should see the user name if the user is logged in', () => {
    // get a dom element
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('#p2').textContent).toContain(component.user.name);
  });

  it('should not see the user name if the user is not logged in', () => {
    // get a dom element
    fixture.detectChanges();
    let compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('#p2').textContent).toContain('Please Log in first');
    expect(compile.querySelector('#p2').textContent).not.toContain(component.user.name);
  });
});

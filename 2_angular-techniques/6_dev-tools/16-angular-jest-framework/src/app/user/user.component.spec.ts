import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../service/user.service';
import { of, throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';
import { UserComponent } from './user.component';
import { IUser } from '../model/user.interface';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: any;
  let users: IUser[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804"
    }
  ]

  beforeEach(async () => {
    userService = {
      getUsers: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        {
          provide: UserService,
          useValue: userService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users', () => {
    jest.spyOn(userService, 'getUsers').mockReturnValue(of(users))
    fixture.detectChanges();
    expect(component.users).not.toBeUndefined();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should get users get errorMessage', () => {
    const errResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not found'
    });
    jest.spyOn(userService, 'getUsers').mockReturnValue(throwError(() => errResponse));
    component.getUsers();
    expect(component.errorMessage).not.toBe('Not Found')
  });

  it('should status set value', () => {
    jest.spyOn(userService, 'getUsers').mockReturnValue(of(users))
    fixture.detectChanges();
    expect(component.status).toBe('Amazing good job!');
  });
});

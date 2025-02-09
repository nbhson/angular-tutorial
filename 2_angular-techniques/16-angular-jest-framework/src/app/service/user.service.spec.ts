/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { of, throwError } from 'rxjs'
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IUser } from '../model/user.interface';

describe('Service: UserService', () => {
  let service: UserService;
  let httpClient: any;
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

  beforeEach(() => {
    httpClient = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    }
    service = new UserService(httpClient);
  });

  test('should test get user', () => {
    const url = 'http://localhost:3000/users';
    jest.spyOn(httpClient, 'get').mockReturnValue(of(users));
    service.getUsers();
    expect(httpClient.get).toBeCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith(url);
  })

  test('should test get user success', (done) => {
    const url = 'http://localhost:3000/users';
    jest.spyOn(httpClient, 'get').mockReturnValue(of(users));
    service.getUsersCatchError().subscribe({
      next: (_users) => {
        expect(_users).toEqual(users);
        done();
      }
    })
    expect(httpClient.get).toBeCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith(url);
  })

  it('should test get user throw error', (done) => {
    const errResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not found'
    });
    const url = 'http://localhost:3000/users';
    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(() => errResponse));
    service.getUsersCatchError().subscribe({
      next: (users) => {
        expect(users).toEqual('Data');
        done();
      },
      error: (error) => {
        expect(error.message).toContain('test 404 error')
        done();
      }
    })
    expect(httpClient.get).toBeCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith(url);
  })

  it('should test create user', (done) => {
    const url = 'http://localhost:3000/users';
    const user: IUser = {
      id: 11,
      email: 'Johny@gmail.com',
      name: 'John',
      phone: '0846515646'
    };
    jest.spyOn(httpClient, 'post').mockReturnValue(of(user));
    service.createUser(user);
    expect(httpClient.post).toBeCalledTimes(1);
    done();
  })

  it('should test update user', (done) => {
    const url = 'http://localhost:3000/users';
    const user: IUser = {
      id: 11,
      email: 'Johny@gmail.com',
      name: 'John',
      phone: '0846515646'
    };
    jest.spyOn(httpClient, 'put').mockReturnValue(of(user));
    service.updateUser(user);
    expect(httpClient.put).toBeCalledTimes(1);
    done();
  })

  it('should test delete user', (done) => {
    const url = 'http://localhost:3000/users';
    const user: IUser = {
      id: 11,
      email: 'Johny@gmail.com',
      name: 'John',
      phone: '0846515646'
    };
    jest.spyOn(httpClient, 'delete').mockReturnValue(of(user));
    service.deleteUser(user.id);
    expect(httpClient.delete).toBeCalledTimes(1);
    done();
  })
});

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { TodoRepository, TODO_REPOSITORY } from './core/ports/todo.repository';
import { TodoMockAdapter } from './adapters/mock/todo.mock.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: TODO_REPOSITORY,
      useClass: TodoMockAdapter
    }
  ]
};

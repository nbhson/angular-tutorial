import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './store/user.effect';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('my-users', userReducer),
    EffectsModule.forFeature([UserEffect]),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsersModule { }

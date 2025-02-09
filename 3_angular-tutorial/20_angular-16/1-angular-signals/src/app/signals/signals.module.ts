import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        SignalsRoutingModule,
    ]
})
export class SignalsModule { }

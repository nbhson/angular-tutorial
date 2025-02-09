import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalTypesComponent } from './signal-types.component';
import { SignalTypeRoutingModule } from './signal-type-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SignalTypeRoutingModule,
        SignalTypesComponent,
    ]
})
export class SignalTypesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FindAllComponent } from './find-all/find-all.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    FindAllComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }

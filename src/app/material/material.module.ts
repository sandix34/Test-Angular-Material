import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

const Material = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    CommonModule,
    ...Material
  ],
  exports: Material,
  declarations: []
})
export class MaterialModule { }

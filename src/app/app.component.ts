import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      input: [''],
      checkbox: [''],
      radio: [''],
      slide: ['']
    })
  }
}

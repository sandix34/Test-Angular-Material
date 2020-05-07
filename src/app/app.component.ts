import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  options = [
    { nom: 'Italie' },
    { nom: 'France' },
    { nom: 'Espagne' }
  ];

  filteredOptions: Observable<{ nom: string }[]>;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      checkbox: [''],
      radio: [''],
      slide: [''],
      select: [''],
      range: [''],
      date: [''],
      auto: ['']
    })

    this.filteredOptions = this.form.get('auto').valueChanges
      .pipe(
        startWith(''),
        map(value => this.filtrer(value))
      );

    }
    public filtrer(input: string) {
    return this.options.filter(option => option.nom.toLowerCase().includes(input.toLowerCase()));
    }
    
    public fonctionAffichage(option): string {
      return option ? option.nom : option;
    }
    
  public getError(): string {
    if (this.form.get('email').hasError('email')) {
      return `l'email n'est pas valide`;
    }
  }

}

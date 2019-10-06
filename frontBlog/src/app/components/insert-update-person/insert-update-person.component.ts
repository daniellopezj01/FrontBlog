import { Person } from './../../models/Person';
import { PersonsComponent } from './../persons/persons.component';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsServices } from './../../services/NewsServices';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-insert-update-person',
  templateUrl: './insert-update-person.component.html',
  styleUrls: ['./insert-update-person.component.scss']
})

@Injectable()
export class InsertUpdatePersonComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  person: Person;
  name: any;
  sendPerson: any;
  tittle: String;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsertUpdatePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public componentPerson: PersonsComponent, private NewsServices: NewsServices) {
    this.person = new Person();
    this.tittle = ""
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      Birthdate: ['', [Validators.required]],
      type: ['', [Validators.required]],
      articulos: ['', [Validators.required]],
    });
    this.loadinfo();
  }

  loadinfo() {
    if (this.componentPerson.name == 1) {
      this.tittle = "Register"
    } else if (this.componentPerson.name == 2) {
      this.tittle = "Update"
      this.person = this.componentPerson.sendperson;
      console.log(this.person);
    }
  }

  insertOrUpdatePerson() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.componentPerson.name == 1) {
      this.insert();
    } else if (this.componentPerson.name == 2) {
      this.update();
    }
  }

  insert() {
    this.person.id_person = this.randomInt(100, 200);
    this.NewsServices.insertPerson(this.person).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos almacenados")
        this.dialogRef.close();
      } else {
        alert("Ocurrio un error")
      }
    })
  }

  update() {
    let p = new Person();
    p.id_person = this.person.id_person;
    p.name = this.person.name;
    p.last_name = this.person.last_name;
    p.birthdate = this.person.birthdate;
    p.type = this.person.type;
    p.articulos = this.person.articulos;
    this.NewsServices.UpdatePerson(p).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos actualizados")
        this.dialogRef.close();
      } else {
        alert("Ocurrio un error")
      }
    })
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

import { Person } from './../../models/Person';
import { PersonsComponent } from './../persons/persons.component';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsServices } from './../../services/NewsServices';
import { Publication } from 'src/app/models/publications';
import { PublicationsComponent } from '../publications/publications.component';
import { PublicationsService } from 'src/app/services/PublicationsService';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-insert-update-publications',
  templateUrl: './insert-update-publications.component.html',
  styleUrls: ['./insert-update-publications.component.scss']
})
export class InsertUpdatePublicationsComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  publication: Publication;
  name: any;
  sendpublication: any;
  tittle: String;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsertUpdatePublicationsComponent>,
    @Inject(MAT_DIALOG_DATA) public componentPublication: PublicationsComponent, private publicationSservice: PublicationsService) {
    this.publication = new Publication();
    this.tittle = ""
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Autor: ['', [Validators.required]],
    });
    this.loadinfo();
  }

  loadinfo() {
    if (this.componentPublication.name == 1) {
      this.tittle = "Register"
    } else if (this.componentPublication.name == 2) {
      this.tittle = "Update"
      this.publication = this.componentPublication.sendpublication;
      console.log(this.publication);
    }
  }

  insertOrUpdatePerson() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.componentPublication.name == 1) {
      this.insert();
    } else if (this.componentPublication.name == 2) {
      this.update();
    }
  }

  insert() {
    this.publication.id_publication = this.randomInt(100, 200);
    console.log(this.publication)
    this.publicationSservice.insertpublication(this.publication).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos almacenados")
        this.dialogRef.close();
      } else {
        alert("Ocurrio un error")
      }
    })
  }

 update() {
    let p = new Publication();
    p.id_publication =  this.publication.id_publication ;
    p.public_title = this.publication.public_title;
    p.desc_publication = this.publication.desc_publication;
    p.author = this.publication.author;
    p.comments = this.publication.comments;
    this.publicationSservice.Updatepublication(p).subscribe(res => {
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

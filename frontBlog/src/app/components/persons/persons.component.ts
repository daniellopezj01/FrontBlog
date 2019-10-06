import { Person } from './../../models/Person';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NewsServices } from './../../services/NewsServices';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InsertUpdatePersonComponent } from '../insert-update-person/insert-update-person.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  message: string = "Persons";
  subscription: Subscription;
  showinfo: boolean;
  listInfo: any;
  headElements = ['ID', 'nombre', 'apellido', 'F Nacimiento', 'Tipo', 'eliminar', 'actualizar'];
  name: number;
  sendperson: Person;

  constructor(public dialog: MatDialog, private _router: Router, private NewsServices: NewsServices) {
    this.showinfo = false;
    this.loadPersons();
  }

  insert(): void {
    const dialogRef = this.dialog.open(InsertUpdatePersonComponent, {
      data: { name: 1 }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.NewsServices.requestPerson().subscribe(res => {
        this.listInfo = res;
      });
    });
  }

  loadPersons() {
    this.showinfo = false;
    this.NewsServices.requestPerson().subscribe(res => {
      this.listInfo = res;
      this.showinfo = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.loadPersons();
  }

  delete(id_person) {
    var opcion = confirm("¿Estas seguro(@)?");
    if (opcion == true) {
      this.NewsServices.deletePerson(id_person).subscribe(res => {
        if (res['status'] == 200) {
          this.NewsServices.requestPerson().subscribe(res => {
            this.listInfo = res;
          });
          console.log("hola");
        } else {
          alert("Ocurrio un error")
        }
      })
    }
  }

  update(valor) {
    const dialogRef = this.dialog.open(InsertUpdatePersonComponent, {
      data: { name: 2, sendperson: valor }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.NewsServices.requestPerson().subscribe(res => {
        this.listInfo = res;
      });
    });
  }
}



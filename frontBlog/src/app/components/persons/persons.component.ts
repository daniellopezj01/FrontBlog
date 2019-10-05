import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from '../../services/MessageService';
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

  constructor(public dialog: MatDialog, private messageService: MessageService, private _router: Router, private NewsServices: NewsServices) {
    this.showinfo = false;
    this.loadPersons();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InsertUpdatePersonComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {

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

  delete(valor) {
    console.log(valor);
  }


  update(valor) {
    console.log(valor);
  }
}



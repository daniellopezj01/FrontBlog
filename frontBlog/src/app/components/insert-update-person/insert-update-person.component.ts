import { PersonsComponent } from './../persons/persons.component';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-insert-update-person',
  templateUrl: './insert-update-person.component.html',
  styleUrls: ['./insert-update-person.component.scss']
})


@Injectable()
export class InsertUpdatePersonComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<InsertUpdatePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PersonsComponent) {

  }
  ngOnInit() {
  }

}

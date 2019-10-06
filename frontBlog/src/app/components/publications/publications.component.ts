import { InsertUpdatePublicationsComponent } from './../insert-update-publications/insert-update-publications.component';
import { Publication } from './../../models/publications';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from './../../services/PublicationsService';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
 
  message: string = "Publication";
  showinfo: boolean;
  listInfo: any;
  headElements = ['id', 'title', 'description', 'Author', 'id_coments', 'Delete', 'Update'];
  name: number;
  sendpublication: Publication;

  constructor(public dialog: MatDialog, private _router: Router, private publicationService: PublicationsService) {
    this.showinfo = false;
    this.loadPersons();
  }

  insert(): void {
    const dialogRef = this.dialog.open(InsertUpdatePublicationsComponent, {
      data: { name: 1 }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.publicationService.requestpublication().subscribe(res => {
        this.listInfo = res;
      });
    });
  }

  loadPersons() {
    this.showinfo = false;
    this.publicationService.requestpublication().subscribe(res => {
      this.listInfo = res;
      this.showinfo = true;
    });
  }


  ngOnInit() {
    this.loadPersons();
  }

  delete(id_publication) {
    var opcion = confirm("¿Estas seguro(@)?");
    if (opcion == true) {
      this.publicationService.deletepublication(id_publication).subscribe(res => {
        if (res['status'] == 200) {
          this.publicationService.requestpublication().subscribe(res => {
            this.listInfo = res;
          });
        } else {
          alert("Ocurrio un error")
        }
      })
    }
  }

  update(valor) {
    const dialogRef = this.dialog.open(InsertUpdatePublicationsComponent, {
      data: { name: 2, sendpublication: valor }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.publicationService.requestpublication().subscribe(res => {
        this.listInfo = res;
      });
    });

  }
}
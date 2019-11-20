import { Blog } from './../../models/Blog';
import { blogService } from './../../services/blogService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InsertUpdateBlogsComponent } from '../insert-update-blogs/insert-update-blogs.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  message: string = "Publication";
  showinfo: boolean;
  listInfo: any;
  headElements = ['id', 'title', 'description', 'publication', 'category', 'manager', 'Delete', 'Update'];
  name: number;
  sendblog: Blog;

  constructor(public dialog: MatDialog, private _router: Router, private blogService: blogService) {
    this.showinfo = false;
    this.loadPersons();
  }

  insert(): void {
    const dialogRef = this.dialog.open(InsertUpdateBlogsComponent, {
      data: { name: 1 }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.blogService.requestblog().subscribe(res => {
        this.listInfo = res;
      });
    });
  }

  loadPersons() {
    this.showinfo = false;
    this.blogService.requestblog().subscribe(res => {
      this.listInfo = res;
      this.showinfo = true;
    });
  }


  ngOnInit() {
    this.loadPersons();
  }

  delete(id_blog) {
    var opcion = confirm("¿Estas seguro(@)?");
    if (opcion == true) {
      this.blogService.deleteblog(id_blog).subscribe(res => {
        if (res['status'] == 200) {
          this.blogService.requestblog().subscribe(res => {
            this.listInfo = res;
          });
        } else {
          alert("Ocurrio un error")
        }
      })
    }
  }

  update(valor) {
    const dialogRef = this.dialog.open(InsertUpdateBlogsComponent, {
      data: { name: 2, sendblog: valor }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.blogService.requestblog().subscribe(res => {
        this.listInfo = res;
      });
    });

  }
}

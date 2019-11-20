import { blogService } from './../../services/blogService';
import { BlogsComponent } from './../blogs/blogs.component';
import { Blog } from './../../models/Blog';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Publication } from 'src/app/models/publications';

@Component({
  selector: 'app-insert-update-blogs',
  templateUrl: './insert-update-blogs.component.html',
  styleUrls: ['./insert-update-blogs.component.scss']
})
export class InsertUpdateBlogsComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  blog: Blog;
  name: any;
  sendblog: any;
  tittle: String;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsertUpdateBlogsComponent>,
    @Inject(MAT_DIALOG_DATA) public componentBlog: BlogsComponent, private blogService: blogService) {
    this.blog = new Blog();
    this.tittle = ""
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      blog_title: ['', [Validators.required]],
      description_blog: ['', [Validators.required]],
      category: ['', [Validators.required]],
      manager: ['', [Validators.required]],
    });
    this.loadinfo();
  }

  loadinfo() {
    if (this.componentBlog.name == 1) {
      this.tittle = "Register"
    } else if (this.componentBlog.name == 2) {
      this.tittle = "Update"
      this.blog = this.componentBlog.sendblog;
      console.log(this.blog);
    }
  }

  insertOrUpdatePerson() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.componentBlog.name == 1) {
      this.insert();
    } else if (this.componentBlog.name == 2) {
      this.update();
    }
  }

  insert() {
    this.blog.id_blog = this.randomInt(100, 200);
    console.log(this.blog)
    this.blogService.insertblog(this.blog).subscribe(res => {
      if (res['status'] == 200) {
        alert("datos almacenados")
        this.dialogRef.close();
      } else {
        alert("Ocurrio un error")
      }
    })
  }

 update() {
    let p = new Blog();
    p.id_blog =  this.blog.id_blog ;
    p.blog_title = this.blog.blog_title;
    p.description_blog = this.blog.description_blog;
    p.id_publication = this.blog.id_publication;
    p.category = this.blog.category;
    p.manager = this.blog.manager;
    this.blogService.Updateblog(p).subscribe(res => {
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

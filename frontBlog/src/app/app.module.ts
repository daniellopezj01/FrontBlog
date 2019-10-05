import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { ShowNewComponent } from './components/show-new/show-new.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {DataTableModule} from "angular-6-datatable";

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { APP_BASE_HREF } from '@angular/common';
import { CommonModule }   from '@angular/common';
import { PublicationsComponent } from './components/publications/publications.component';
import { PersonsComponent } from './components/persons/persons.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsComponent } from './components/comments/comments.component';
import { InsertUpdatePersonComponent } from './components/insert-update-person/insert-update-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    ShowNewComponent,
    PublicationsComponent,
    PersonsComponent,
    BlogsComponent,
    CommentsComponent,
    InsertUpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    DataTableModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    InsertUpdatePersonComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

import { CommentsComponent } from './components/comments/comments.component';
import { PersonsComponent } from './components/persons/persons.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
    { path: 'container', component: ContainerComponent },
    { path: '', component: HomeComponent, },
    { path: 'publications', component: PublicationsComponent },
    { path: 'persons', component: PersonsComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'comments', component: CommentsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 53]
        },
    )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }

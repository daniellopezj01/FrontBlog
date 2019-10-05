import { NewsServices } from './../../services/NewsServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.scss']
})
export class ShowNewComponent implements OnInit {
  showinfo: boolean;
  noticia: any;
  contenidoNoticia: any;

  constructor(private NewsServices: NewsServices) {
    if (sessionStorage.getItem('noticia')) {
      this.noticia = JSON.parse(sessionStorage.getItem('noticia'));
      this.NewsServices.requestNew(this.noticia.url).subscribe(res => {
        this.contenidoNoticia = res;
        this.showinfo = true;
        var x = 1;
        this.contenidoNoticia.forEach(element => {
          console.log(`${element}   ${x++} `);
        });
      });

    } else {
      alert("seleccionar una noticia");
    }
  }

  ngOnInit() {
  }

}

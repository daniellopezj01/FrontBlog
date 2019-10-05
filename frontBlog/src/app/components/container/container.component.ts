import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../services/MessageService';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  constructor(private _router: Router,private messageService: MessageService) {
   }

  ngOnInit() {
  }

  load(page: string) {
    this.messageService.sendMessage(page);
  }
}

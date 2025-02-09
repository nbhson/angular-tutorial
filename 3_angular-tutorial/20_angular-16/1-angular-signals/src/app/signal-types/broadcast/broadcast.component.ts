import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BroadcastService } from './broadcast.service';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  @ViewChild('input', { static: true }) inputElementRef!: ElementRef;

  constructor(private messageService: BroadcastService) { }

  ngOnInit(): void { }

  sendMessage() {
    this.messageService.sendMessage(this.inputElementRef.nativeElement.value);
  }
}

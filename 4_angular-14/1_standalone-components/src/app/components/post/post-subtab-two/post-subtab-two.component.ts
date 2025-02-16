import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-subtab-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-subtab-two.component.html',
  styleUrls: ['./post-subtab-two.component.scss']
})
export class PostSubtabTwoComponent implements OnInit {

  @Input() body: string = ''
  @Output() seen = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  hasSeen(value: boolean) {
    this.seen.emit(value)
  } 

}

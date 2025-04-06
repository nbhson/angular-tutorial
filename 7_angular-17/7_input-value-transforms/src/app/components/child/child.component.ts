import { booleanAttribute, Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  // @Input() expanded = false;
  @Input({ transform: booleanAttribute }) expanded: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.expanded);
  }

}

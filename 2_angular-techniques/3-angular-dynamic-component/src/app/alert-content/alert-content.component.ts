import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-content',
  templateUrl: './alert-content.component.html',
  styleUrls: ['./alert-content.component.scss']
})
export class AlertContentComponent implements OnInit {

  @Input() data!: string

  constructor(private _alertService: AlertService) { }

  ngOnInit(): void {
  }

  close() {
    this._alertService.close()
  }
}

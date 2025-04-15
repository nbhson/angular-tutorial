import { Component, OnInit } from '@angular/core';
import { PHOTO_LIST } from '../../constant/photo.constant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class PhotoListComponent implements OnInit {
  photoList = PHOTO_LIST;
  
  constructor() { }

  ngOnInit() {
  }

}

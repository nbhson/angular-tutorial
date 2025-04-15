import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PHOTO_LIST } from '../../constant/photo.constant';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class PhotoDetailComponent implements OnInit {

  route = inject(ActivatedRoute);
  photoId = this.route.snapshot.params['id'];
  imageUrl = PHOTO_LIST.find((p) => p.id === Number(this.photoId))?.large;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpperCasePipe } from 'src/app/pipes/format-text.pipe';
import { PostSubtabOneComponent } from '../post-subtab-one/post-subtab-one.component';
import { PostSubtabTwoComponent } from '../post-subtab-two/post-subtab-two.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, PostSubtabOneComponent, PostSubtabTwoComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {

  post!: Post
  subDetail = 0
  seen = false

  constructor(
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngDoCheck(): void {
    let id = parseInt(this._activatedRoute.snapshot.params['id']);

    const post = this._postService.getPostInfo(id)
    if (post) this.post = post
    // else this._router.navigate(['/posts']);     
  }

  changeSub(subDetail: number) {
    this.subDetail = subDetail
  }

  hasSeen(seen: boolean) {
    this.seen = seen
  }
}

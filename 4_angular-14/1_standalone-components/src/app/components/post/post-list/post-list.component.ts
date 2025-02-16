import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from 'src/app/services/post.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  posts!: Post[]

  constructor(
    public _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPost()
  }
  
  getAllPost() {
    this._postService.getAllPost().subscribe(
      (post: Post[]) => {
        this.posts = post
      },
      (error) => {
        console.error(error);
      }
    )
  }

  navigate(path: string, id: number) {
    this._router.navigate([`${path}`, id])
  }

  decreaseLength() {
    this._postService.length += 1
  }
}

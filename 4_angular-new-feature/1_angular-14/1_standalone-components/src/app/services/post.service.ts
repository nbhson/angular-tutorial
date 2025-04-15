import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostAPI, PostDTO } from 'src/api/post.api';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public length = 0;
  private userMap!: Map<number, Post>

  constructor(
    private _postAPI: PostAPI
  ) { }

  getAllPost(): Observable<Post[]> {
    this.userMap = new Map<number, Post>()
    return this._postAPI.getAllPost().pipe(
      map((postDTO: PostDTO[]) => {
        let post: Post[] = []
        postDTO.forEach(dto => {
          const _post = {
            id: dto.id,
            title: dto.title,
            body: dto.body
          }
          post.push(_post)
          this.userMap.set(_post.id, _post)
        });
        return post
      })
    )
  }

  getPostInfo(postId: number = -1) {
    if (postId && this.userMap && this.userMap.has(postId)) {
      return this.userMap.get(postId)
    }
    return null
  }
}

export interface Post {
  id: number,
  title: string,
  body: string,
}
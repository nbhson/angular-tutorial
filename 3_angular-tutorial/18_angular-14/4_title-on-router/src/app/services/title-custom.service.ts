

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PostAPI, PostDTO } from 'src/api/post.api';

@Injectable({
  providedIn: 'root'
})

export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Standalone App - ${title}`);
    } else {
      this.title.setTitle(`Standalone app - Custom page`);
    }
  }

  getTitle() {
    return this.title.getTitle();
  }
}
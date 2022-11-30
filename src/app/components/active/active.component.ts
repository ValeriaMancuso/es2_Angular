import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPost, updatePost } from 'src/app/service/posts.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  posts: Post[] = [];


  constructor() {

  }

  ngOnInit(): void {
    getPost().then(posts => this.posts = posts);
  }

  onInactivePost(id: number, i: number) {
    updatePost({active: false}, id)
    this.posts.splice(i,1)

  }
}

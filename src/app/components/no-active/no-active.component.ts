import { Component, OnInit, ɵisBoundToModule } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPost, updatePost } from 'src/app/service/posts.service';

@Component({
  selector: 'app-no-active',
  templateUrl: './no-active.component.html',
  styleUrls: ['./no-active.component.scss']
})
export class NoActiveComponent implements OnInit {
  posts: Post[] = [];

  constructor() {}


  ngOnInit(): void {
    getPost().then(posts => this.posts = posts);

  }

  onActivePost(id: number, i: number) {
    updatePost({active: true}, id)
    this.posts.splice(i,1)

  }
}

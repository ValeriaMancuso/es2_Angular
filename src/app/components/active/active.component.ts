import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postsSrv from '../../service/posts.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  posts: Post[] = [];


  constructor() {
    postsSrv.getPost().then(posts => this.posts = posts);
  }

  ngOnInit(): void {
  }

}

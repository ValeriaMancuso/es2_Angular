import { Component, OnInit, ɵisBoundToModule } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postsSrv from '../../service/posts.service';

@Component({
  selector: 'app-no-active',
  templateUrl: './no-active.component.html',
  styleUrls: ['./no-active.component.scss']
})
export class NoActiveComponent implements OnInit {
  posts: Post[] = [];

  constructor() {
    postsSrv.getPost().then(posts => this.posts = posts);

  }


  ngOnInit(): void {
  }

}

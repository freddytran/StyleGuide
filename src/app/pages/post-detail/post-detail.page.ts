import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  private comment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.comment = this.route.snapshot.paramMap.get('contentID');
  }

}

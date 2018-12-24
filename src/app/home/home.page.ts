import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { PostServiceService} from '../services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  value = '';
  dynamicContentID = '';
  comments: any;
  post: any;

  constructor(private nav: NavController, public postService: PostServiceService) {
    this.getAllContent();
  }

  pushPage() {
    this.nav.navigateForward('/postDetail/' + this.value);
  }

  getAllContent() {
    this.postService.getAllPost().subscribe((res) => {
      this.post = res.posts;
      console.log(this.post);
      /*for (let i = 0; i <= this.post.length - 1; i++) {
        this.post[i].comment = this.getComments(this.post[i].contentID);
        /!*this.post.splice(i, 0, this.getComments(this.post[i].contentID));*!/
        console.log('Comments from Post: ' + this.post[i].comment);
      }*/
    });
  }

  getComments(contentID) {
    console.log('Funktioniet das? ' + contentID);
    this.postService.getCommentsFromPost(contentID).subscribe((res) => {
      this.comments = res.comments;
      console.log(this.comments);
      return this.comments;
    });
  }
}

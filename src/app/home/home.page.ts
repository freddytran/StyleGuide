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
  commentMap = {};

  gotComments = false;

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
      this.getComments(this.post);
      /*for (let i = 0; i <= this.post.length - 1; i++) {
        this.post[i].comment = this.getComments(this.post[i].contentID);
        /!*this.post.splice(i, 0, this.getComments(this.post[i].contentID));*!/
        console.log('Comments from Post: ' + this.post[i].comment);
      }*/
    });
  }

  getComments(contentID) {
    for (let i = 0; i <= contentID.length - 1; i++) {
      this.postService.getCommentsFromPost(contentID[i].contentID).subscribe((res) => {
        if (res.count > 0) {
          this.commentMap[contentID[i].contentID] = res;
          console.log(this.commentMap['5c15826f7aeb9b2e700716bd']);
        } else {
          console.log('Hier wurden keine Kommis gefunden');
        }
      });
    }
    /*this.callBelongingComments('5c15826f7aeb9b2e700716bd');*/
  }

  callBelongingComments(contentID) {
    console.log('Check ' + this.commentMap);
    if (contentID in this.commentMap) {
      console.log(this.commentMap);
      return true;
    } else {
      return true;
    }
  }
}

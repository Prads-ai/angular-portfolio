import { Component } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username = 'Prads-ai';
  bio: string = '';
  avatarUrl: string = '';

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.githubApiService.getUserWithToken(this.username).subscribe(
      (data) => {
        this.bio = data.bio;
        this.avatarUrl = data.avatar_url;
      },
      (error) => {
        console.log('An error occurred while fetching user details');
      }
    );
  }
}
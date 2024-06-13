import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from '../services/github-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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

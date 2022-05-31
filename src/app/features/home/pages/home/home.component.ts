import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.homeService.getPosts().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  Comics: {};

  constructor(  
    private restApi: RestApiService
    ) { }
  
    ngOnInit() {
      this.loadComics()
    }
  
    // Get comics list
    loadComics() {
      return this.restApi.getComics().subscribe((data: {}) => {
        this.Comics = data;
      })
    }
  }
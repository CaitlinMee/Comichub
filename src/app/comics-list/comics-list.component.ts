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
  
    // Get employees list
    loadComics() {
      return this.restApi.getComics().subscribe((data: {}) => {
        this.Comics = data;
      })
    }
  
    // Delete employee
    deleteComics(id) {
      if (window.confirm('Are you sure, you want to delete?')){
        this.restApi.deleteComic(id).subscribe(data => {
          this.loadComics()
        })
      }
    }  
    }
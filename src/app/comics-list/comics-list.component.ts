import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 150, completeWords = true, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf('');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}

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


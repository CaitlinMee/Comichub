import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
  comic: {};
  display = 'none';

  constructor(
    private route: ActivatedRoute,
    private restApi: RestApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getComic();
  }

  getComic() {
    // Get Comic Id and set to array element number
    var id = +this.route.snapshot.paramMap.get('id');
    id--;
    return this.restApi.getComics().subscribe((data: {}) => {
      this.comic = data[id];
    })
  }

  goBack(): void {
    this.location.back();
  }

  openModal(){
    this.display='block';
  }    

  onCloseHandled(){
    this.display='none';
  }

  onAddHandled(){
    var characterName = (<HTMLInputElement>document.getElementById('charactername')).value;
    var description = (<HTMLInputElement>document.getElementById('description')).value;
    var imageURL = (<HTMLInputElement>document.getElementById('imageurl')).value;

    alert("Not Implemented for " + characterName);
    this.display='none';
  }

}


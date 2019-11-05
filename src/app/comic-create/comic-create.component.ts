import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'comic-create',
  templateUrl: './comic-create.component.html',
  styleUrls: ['./comic-create.component.css']
})
export class ComicCreateComponent implements OnInit {
  
  @Input() comicDetails = { Name: '', Image: '', }
  display = 'none';

  constructor( 
    public restApi: RestApiService, 
    public router: Router ) {}

  ngOnInit() {}

  createComic(newComic) {
    this.restApi.createComic(this.comicDetails).subscribe((data: {}) => {
      this.router.navigate(['/comic-details'])
    })
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

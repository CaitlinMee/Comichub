// import { Component, OnInit } from '@angular/core';
// import { Comics, Character } from "../shared/Comics";
// import { ActivatedRoute, Router } from '@angular/router';
// import { RestApiService } from '../shared/rest-api.service';
// import { Location } from '@angular/common';


// @Component({
//   selector: 'character-info',
//   templateUrl: './character-info.component.html',
//   styleUrls: ['./character-info.component.css']
// })
// export class CharacterInfoComponent implements OnInit {
//   comic: Comics;
//   character: Character
//   display = 'none';

//   constructor(
//     private route: ActivatedRoute,
//     public restApi: RestApiService,
//     private location: Location,
//     public router: Router
//   ) { }

//   ngOnInit() {
//     this.getComic();
//   }

//   getComic() {
//     // Get Comic Id and set to array element number
//     var id = +this.route.snapshot.paramMap.get('id');
//     id--;
//     return this.restApi.getComics().subscribe((data: {}) => {
//       this.comic = data[id];
//     })
//   }
// }

import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comics, Character } from "../shared/Comics";

@Component({
  selector: 'character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  character:any;

  constructor(public rest:RestApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getComic(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.character = data;
    });
  }

}

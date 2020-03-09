import { Component, OnInit, Input } from '@angular/core';
import { Comics, Character } from "../shared/Comics";
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  comic: Comics;
 @Input() character: Character;
  display = 'none';

  constructor(
    private route: ActivatedRoute,
    public restApi: RestApiService,
    private location: Location,
    public router: Router
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
}

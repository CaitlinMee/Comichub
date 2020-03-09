import { Component, OnInit, Input } from '@angular/core';
import { Comics, Character } from "../shared/Comics";
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
  comic: Comics;
  display = 'none';
  characters: Character;

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

    var newCharacterId = this.comic.characters.length;

    let newCharacter = new Character();
    newCharacter.id = newCharacterId.toString();
    newCharacter.name = characterName;
    newCharacter.description = description;
    newCharacter.image = imageURL;
    newCharacter.numberOfRoles = "1";

    this.comic.characters.push(newCharacter);

    this.display='none';
    alert(characterName + "Successfully Added to Comic");
  }

  onDeleteHandled(characterId){
    this.comic.characters.splice(characterId, 1);
    this.display='none';
    alert("Successfully Removed from Comic");
  }

}


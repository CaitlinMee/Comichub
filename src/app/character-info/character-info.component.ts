import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comics, Character } from "../shared/Comics";
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent{
 @Input() characters: Character;

 @Output() charactersEvent = new EventEmitter();

 sendcharacters() {
   this.charactersEvent.emit(this.characters);
 }
}
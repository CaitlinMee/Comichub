import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicCreateComponent } from './comic-create/comic-create.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicUpdateComponent } from './comic-update/comic-update.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { CharacterInfoComponent } from './character-info/Character-Info.Component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'create-comic', component: ComicCreateComponent },
  { path: 'comic-details/:id', component: ComicDetailsComponent,},
  { path: 'update-comic', component: ComicUpdateComponent },
  { path: 'home', component: ComicsListComponent },
  { path: 'character-info', component: CharacterInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
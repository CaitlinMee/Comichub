import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComicCreateComponent } from './comic-create/comic-create.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicUpdateComponent } from './comic-update/comic-update.component';
import { ComicsListComponent, TruncatePipe } from './comics-list/comics-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CharacterInfoComponent } from "./character-info/Character-Info.Component";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'comic-create', component: ComicCreateComponent },

]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    ComicCreateComponent,
    ComicDetailsComponent,
    ComicUpdateComponent,
    ComicsListComponent,
    TruncatePipe,
    CharacterInfoComponent,
  ],

  exports: [
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {}
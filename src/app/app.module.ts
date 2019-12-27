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
import { CharacterInfoComponent } from './character-info/character-info.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
    ComicCreateComponent,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {}
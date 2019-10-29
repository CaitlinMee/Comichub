import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComicCreateComponent } from './comic-create/comic-create.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicUpdateComponent } from './comic-update/comic-update.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  declarations: [
    AppComponent,
    ComicCreateComponent,
    ComicDetailsComponent,
    ComicUpdateComponent,
    ComicsListComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
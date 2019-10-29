import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComicCreateComponent } from './comic-create/comic-create.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicUpdateComponent } from './comic-update/comic-update.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-comic' },
    { path: 'create-comic', component: ComicCreateComponent },
    { path: 'comic-details/:id', component: ComicDetailsComponent },
    { path: 'update-comic', component: ComicUpdateComponent },
    { path: 'comics-list', component: ComicsListComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
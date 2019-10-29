import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ComicsListComponent = class ComicsListComponent {
    constructor(restApi) {
        this.restApi = restApi;
    }
    ngOnInit() {
        this.loadComics();
    }
    // Get employees list
    loadComics() {
        return this.restApi.getComics().subscribe((data) => {
            this.Comic = data;
        });
    }
    // Delete employee
    deleteComics(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteComic(id).subscribe(data => {
                this.loadComics();
            });
        }
    }
};
ComicsListComponent = tslib_1.__decorate([
    Component({
        selector: 'comics-list',
        templateUrl: './comics-list.component.html',
        styleUrls: ['./comics-list.component.css']
    })
], ComicsListComponent);
export { ComicsListComponent };
//# sourceMappingURL=comics-list.component.js.map
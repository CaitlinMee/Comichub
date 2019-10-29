import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicUpdateComponent } from './comic-update.component';

describe('ComicUpdateComponent', () => {
  let component: ComicUpdateComponent;
  let fixture: ComponentFixture<ComicUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

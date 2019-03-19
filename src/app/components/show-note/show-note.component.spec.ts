import { CreateNoteComponent } from './../create-note/create-note.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoteComponent } from './show-note.component';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { FormsModule } from '@angular/forms';

describe('ShowNoteComponent', () => {
  let component: ShowNoteComponent;
  let fixture: ComponentFixture<ShowNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[MaterialModule, AppRoutingModule, FormsModule],
      declarations: [ ShowNoteComponent, CreateNoteComponent, RouteNotFoundComponent, EditNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

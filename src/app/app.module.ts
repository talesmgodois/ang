import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { NoteComponent } from './components/note/note.component';
import { NodeDetailComponent } from './components/node-detail/node-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ManageNoteComponent } from './components/manage-note/manage-note.component';
import { ShowNoteComponent } from './components/show-note/show-note.component';
import {MatCardModule} from '@angular/material/card';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    NoteComponent,
    NodeDetailComponent,
    ManageNoteComponent,
    ShowNoteComponent,
    EditNoteComponent,
    CreateNoteComponent,
    RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

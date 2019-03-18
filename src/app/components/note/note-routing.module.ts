import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Note from 'src/app/domain/Note';
import { ShowNoteComponent } from '../show-note/show-note.component';
import { ManageNoteComponent } from '../manage-note/manage-note.component';
import { NoteComponent } from './note.component';

const noteRoutes: Routes = [
  {
    path: 'manage',
    component: NoteComponent,
    children: [
      {
        path: '',
        component: ShowNoteComponent
      },
      {
        path: 'edit',
        component: ManageNoteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(noteRoutes)],
  exports: [RouterModule]
})
export class NoteRouting {}

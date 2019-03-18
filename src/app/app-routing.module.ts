import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ShowNoteComponent } from './components/show-note/show-note.component';
import { ManageNoteComponent } from './components/manage-note/manage-note.component';

const routes: Routes = [
  {
    path: 'notes',
    component: AppContentComponent,
    children: [
      {
        path: ':id',
        component: ShowNoteComponent
      },
      {
        path: 'edit',
        component: ManageNoteComponent
      }
    ]
  },

  { path: '', redirectTo: '/notes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

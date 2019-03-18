import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppContentComponent } from './components/app-content/app-content.component';

const routes: Routes = [
  { path: 'notes', component: AppContentComponent },
  { path: 'notes/show/:id', component: AppContentComponent },
  { path: 'notes/edit/:id', component: AppContentComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

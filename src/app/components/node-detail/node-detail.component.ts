import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import Note from 'src/app/domain/Note';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
  private currentNote$: Observable<Note>;
  public currentNote: Note;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input()
  public model: Note;

  public remove() {
    this.notesService.delete(this.model);
  }

  public navigate() {
    this.router.navigate(['notes/show/' + this.model.id]);
  }

  public isActive() {
    if (this.model && this.currentNote) {
      return this.currentNote.id === this.model.id;
    }
    return false;
  }

  public getStyle(): any {
    return this.isActive() ? { 'background-color': '#c5c5c5' } : {};
  }

  ngOnInit() {
    this.currentNote$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.notesService.getNoteById(+params.get('id'));
      })
    );

    this.currentNote$.subscribe(currentNote => {
      this.currentNote = Note.copy(currentNote);
    });
  }
}

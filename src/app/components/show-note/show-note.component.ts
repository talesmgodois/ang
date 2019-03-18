import { NotesService } from './../../services/notes.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import Note from 'src/app/domain/Note';
import { StorageService } from '../../services/storage.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {
    private currentNote:Note;
    private currentNote$:Observable<Note>;

    constructor(private notesService:NotesService, private route:ActivatedRoute, private router:Router) {}

    ngOnInit() {
        this.currentNote$ = this.route.paramMap.pipe(
            switchMap(params => {
                return this.notesService.getNoteById(+params.get('id'))
            })
        );

        this.currentNote$.subscribe(currentNote => {
            this.currentNote = currentNote;
        })
    }

    delete(){
        this.notesService.delete(this.currentNote);
        this.router.navigate(['']);
    }

    edit() {
        this.router.navigate(['notes/edit/'+ this.currentNote.id]);
    }
}

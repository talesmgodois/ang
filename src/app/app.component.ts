import { NotesService } from './services/notes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import Note from './domain/Note';
import { Observable } from 'rxjs';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
    private selectedId:number;
    private notes$: Observable<Note[]>;
    private currentNote:Note;

    public title = 'adeva-notes';

    constructor(private storageService:StorageService, private notesService:NotesService) { }

    ngOnInit(): void {
        this.notesService.loadNotes();
        window.onbeforeunload = (ev) => {
            this.notesService.dispatchStorage();
        }
    }

    public getNotes():Note[] {
        return this.notesService.getNotes();
    }

    ngOnDestroy(): void {
        this.notesService.dispatchStorage();
    }

}

import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Note from '../../domain/Note';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
    private selectedId:number;
    private notes$: Observable<Note[]>;
    private currentNote:Note;

  constructor(private route: ActivatedRoute, private storageService:StorageService) { }

  ngOnInit() {
    this.notes$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = +params.get('id');
          return this.storageService.getNotes();
        })
      );

    this.notes$.subscribe( notes => {
        this.currentNote = notes.find(note => note.id === this.selectedId);
    })
  }

}

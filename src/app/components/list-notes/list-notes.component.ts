import { Component, OnInit, Input } from '@angular/core';

import Note from '../../domain/Note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  @Input()
  public notes: Note[];

  public searchText: string = '';

  constructor() {}

  public getNotes() {
    if (this.searchText && this.searchText.trim().length === 0)
      return this.notes;
    return this.notes.filter(
      note =>
        note.content.includes(this.searchText) ||
        note.title.includes(this.searchText)
    );
  }

  ngOnInit() {}
}

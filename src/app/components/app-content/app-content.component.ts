import { Component, OnInit } from '@angular/core';
import Note from '../../domain/Note';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  notes: Note[] = [
    new Note('title', 'content'),
    new Note('title2', 'content2')
  ];

  currentNote: Note;

  constructor() {
    this.currentNote = this.notes[0];
  }

  ngOnInit() {}
}

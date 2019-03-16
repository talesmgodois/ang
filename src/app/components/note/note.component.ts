import { Component, OnInit, Input } from '@angular/core';
import Note from '../../domain/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input()
  model: Note;

  constructor() {}

  ngOnInit() {}
}

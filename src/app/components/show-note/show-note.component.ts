import { Component, OnInit, Input } from '@angular/core';
import Note from 'src/app/domain/Note';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {
  @Input()
  public model: Note;

  constructor() {}

  ngOnInit() {}
}

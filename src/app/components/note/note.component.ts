import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Note from '../../domain/Note';
import { ModeNoteService } from 'src/app/services/mode-note.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input()
  model: Note;

  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modeNoteService: ModeNoteService
  ) {}

  public isShowingMode(): boolean {
    return this.modeNoteService.getMode() === 'show';
  }

  public isManagingMode(): boolean {
    return this.modeNoteService.getMode() === 'manage';
  }
  ngOnInit() {}
}

import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import Note from '../../domain/Note';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  notes: Note[] = [new Note('title', 'content')];

  currentNote: Note;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}
}

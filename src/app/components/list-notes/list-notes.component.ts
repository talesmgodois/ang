import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import Note from '../../domain/Note';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnDestroy, OnInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Input()
  public notes: Note[];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

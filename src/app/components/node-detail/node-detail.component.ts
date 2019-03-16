import { Component, OnInit, Input } from '@angular/core';
import Note from 'src/app/domain/Note';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
  constructor() {}

  @Input()
  public model: Note;

  ngOnInit() {}
}

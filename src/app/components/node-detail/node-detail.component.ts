import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import Note from 'src/app/domain/Note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
  
    constructor(private notesService:NotesService, private router:Router) {}

  @Input()
  public model: Note;

  public remove() {
    this.notesService.delete(this.model);
  }

  public navigate(){
      this.router.navigate(['notes/show/'+ this.model.id]);
  }

  ngOnInit() {}
}

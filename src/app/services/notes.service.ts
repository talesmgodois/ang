import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import Note from '../domain/Note';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseId = 0;
  private notes: Note[] = [];

  constructor(private storageService: StorageService) {}

  public getNotes(): Note[] {
    return this.notes;
  }

  public getObsNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  public getNoteById(id: number) {
    return of(this.getNotes().find(note => note.id === id));
  }

  public loadNotes(): void {
    this.notes = this.storageService.getNotes();
  }

  public create(note: Note) {
    const id =
      1 + Math.max(...this.notes.map(_note => _note.id).concat(this.baseId));

    this.baseId = id;
    this.notes.push(note.copyWithId(id));
  }

  public delete(note: Note) {
    this.notes = this.notes.filter(_note => _note.id !== note.id);
  }

  public deleteAll() {
    this.notes = [];
  }

  public dispatchStorage() {
    this.storageService.storeNotes(this.notes);
  }

  public update(note: Note) {
    let _index = this.notes.findIndex(_note => _note.id === note.id);
    this.notes[_index] = note;
  }
}

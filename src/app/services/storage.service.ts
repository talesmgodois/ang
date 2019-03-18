import { Injectable } from '@angular/core';
import Note from '../domain/Note';
import { Observable, of } from 'rxjs';
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}
  readonly NOTES = 'notes';
  readonly LAST_NOTE = 'lastNote';

  public notes:Note[];

  private store(key: string, obj: Object): void {
    localStorage.setItem(key, this.getJson(obj));
  }

  private getJson(obj: Object): string {
    return JSON.stringify(obj);
  }

  private getObjFromJson(str: string): any {
    return JSON.parse(str);
  }

  public getObj(key: string): any {
    return this.getObjFromJson(localStorage.getItem(key));
  }

  public storeNotes(notes: Note[]): void {
    this.store(this.NOTES, notes);
  }

  public getNotes():Note[]{
    const notes = this.getObj(this.NOTES)
    
    return notes? notes: [];
  }

  public getLastNote(): Note{
      const notes = this.getObj(this.NOTES); 
      return notes ? notes[notes.length -1]: null;
  }

  public getNewNoteId():number {
    const last = this.getLastNote();
    if(last && last.id) return last.id +1;
    else return 1;
  }


  public deleteNote(id:number) {
        const notes = this.getNotes();
    }   
}

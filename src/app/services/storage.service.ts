import { Injectable } from '@angular/core';
import Note from '../domain/Note';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}
  readonly NOTES = 'notes';

  private store(key: string, obj: Object): void {
    localStorage.setItem(key, this.getJson(obj));
  }

  private getJson(obj: Object): string {
    return JSON.stringify(obj);
  }

  private getObjFromJson(str: string): Object {
    return JSON.parse(str);
  }

  public getObj(key: string): Object {
    return this.getObjFromJson(localStorage.getItem(key));
  }

  public storeNotes(notes: Note[]): void {
    this.store(this.NOTES, notes);
  }
}

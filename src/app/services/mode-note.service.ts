import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeNoteService {
  private modeRoute: string;

  constructor() {}

  public setMode(mode: string): void {
    this.modeRoute = mode;
  }

  public getMode(): string {
    return this.modeRoute;
  }
}

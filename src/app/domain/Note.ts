export default class Note  {
    public id: number;
    public title: string;
    public content: string;
  
    public constructor(title: string = '', content: string = '') {
        this.title = title;
        this.content = content;
    }

    public  copyWithId(id:number) {
        const note = new Note(this.title, this.content);
        note.id = id;
        return note;
    }
    
  }

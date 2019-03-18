export default class Note  {
    public id: number;
    public title: string;
    public content: string;
  
    public constructor(title: string = '', content: string = '', id:number = null) {
        this.title = title;
        this.content = content;
    }

    public  copyWithId(id:number):Note {
        return new Note(this.title, this.content, id);
    }
    
    public copy(){
        return new Note(this.title, this.content, this.id);
    }
  }

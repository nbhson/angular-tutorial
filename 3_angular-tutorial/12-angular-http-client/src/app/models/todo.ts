export class Todo{
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean){
    this.title = title;
    this.completed = completed;
  }
}

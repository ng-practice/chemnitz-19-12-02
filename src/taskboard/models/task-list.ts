import { Task } from './task';

export class TaskList {
  // tasks: Task[] ;
  // constructor() {
  //   this.tasks = []
  // }

  constructor(public tasks: Task[] = []) {}

  addTaskToList(task: Task): void {
    this.tasks.push(task);
  }
}

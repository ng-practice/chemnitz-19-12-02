import { TaskList } from './taskboard/models/task-list';
import { TaskPriority } from './taskboard/models/task-priority';

const greeting: string = 'Hello Typescript';
console.log(greeting);

const id: string = '1';
const title: string = 'Buy milk';
const text: string = 'go shopping';
const priority: TaskPriority = TaskPriority.Low;
const isDone: boolean = false;

const taskList = new TaskList();

taskList.addTaskToList({ id, title, text, priority, isDone });
console.log(taskList.tasks);

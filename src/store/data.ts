import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

interface DataItems {
  todos: Array<TodoItems>;
  menu: number;
  current: TodoItems;
}

export interface TodoItems {
  id: string;
  description: string;
  completed: boolean;
}

const data = writable<DataItems>({
  todos: [
    { id: uuidv4(), description: 'Take the dog out', completed: false },
    { id: uuidv4(), description: 'Buy milk', completed: false },
  ],
  menu: 3,
  current: null,
});

export default data;

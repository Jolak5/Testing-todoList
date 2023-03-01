import './style.css';

import { renderToDoList } from '../modules/listTasks.js';
// eslint-disable-next-line
import toDoTasks from './todoTasks.js';
import '../modules/eventListeners.js';

const toDoList = document.querySelector('.todo-list-ul');

renderToDoList(toDoTasks, toDoList);

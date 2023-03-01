/* eslint-disable import/no-unresolved */
import { renderToDoList } from './modules/listTasks.js';
import toDoTasks from './toDoTasks.js';
import './modules/eventListeners.js';
import './styles/style.css';

const toDoList = document.querySelector('.todo-list-ul');

renderToDoList(toDoTasks, toDoList);
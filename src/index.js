import _ from 'lodash';
import './style.css';

import { renderToDoList } from '../modules/listTasks.js';
import toDoTasks from './todoTasks';
import '../modules/eventListeners.js';

const toDoList = document.querySelector('.todo-list-ul');

renderToDoList(toDoTasks, toDoList);

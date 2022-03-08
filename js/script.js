"use strict";

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

// чтение из localStorage
const getLocalStorage = () => (JSON.parse(localStorage.getItem('toDoData')) || []);

// запись в localStorage
const putLocalStorage = (toDoData) => localStorage.setItem('toDoData', JSON.stringify(toDoData));

// перерисовка формы
const render = () => {
  const toDoData = getLocalStorage();

  // очистка перед формированием 
  todoCompleted.innerHTML = '';
  todoList.innerHTML = '';

  toDoData.forEach((item, index) => {
    const li = document.createElement('li');

    li.classList.add('todo-item');
    li.innerHTML = `
    <span class="text-todo">${item.text}</span>
    <div class="todo-buttons">
      <button class="todo-remove"></button>
      <button class="todo-complete"></button>
    </div>    
    `;
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    // флажок выполнено - не выполнено
    li.querySelector('.todo-complete').addEventListener('click', () => {
      item.completed = !item.completed;
      putLocalStorage(toDoData);
      render();
    });
    // кнопочка удаления
    li.querySelector('.todo-remove').addEventListener('click', () => {
      toDoData.splice(index, 1);
      putLocalStorage(toDoData);
      render();
    });

  });
};

// вместо отправки формы - создание новой toDo
todoControl.addEventListener('submit', (event) => {
  event.preventDefault();

  // для заполненного задания созданем новую toDo
  if (headerInput.value.trim()) {
    // считать данные
    const toDoData = getLocalStorage();

    const newToDo = {
      text: headerInput.value,
      completed: false,
    };
    // записать данные
    toDoData.push(newToDo);
    putLocalStorage(toDoData);

    headerInput.value = '';
    render();
  }
});

// подключение на реагирования изменений на другой странице
window.addEventListener('storage', () => { render(); });

// перввый запуск
render();
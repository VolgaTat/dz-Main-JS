// Цель:
// Разработать простой таск-менеджер с базовыми функциями добавления, удаления, обновления и сортировки задач.

// Структура таск-менеджера:
// Объект таск-менеджера содержит одно свойство, в котором хранится массив задач. Каждая задача имеет:
// title (строка)
// id (число)
// priority (число)

// Основные методы:
// Добавление задачи:
// Принимает параметры: title и priority.
// Генерирует id (можно использовать инкремент последнего id).
// Добавляет новую задачу в массив.

// Удаление задачи по id:
// Принимает идентификатор задачи.
// Удаляет задачу с указанным id из массива.

// Обновление задачи:
// Принимает id задачи и параметры для обновления (например, новый title, новый приоритет).
// Обновляет информацию о задаче в массиве.

// Сортировка задач:
// Можно сортировать по id или приоритету.
// Реализует порядок сортировки (от меньшего к большему и наоборот).
'use strict'
const todoList = {
  "tasks" : [{'title': 'Помыть машину', 'id': 1, 'priority': 1}],
  addTask: function(titleStr, prStr){
    return this.tasks = [
      ...this.tasks,
      {'title': titleStr, 'id': this.tasks.length ? this.tasks.at(-1).id + 1 : 1,'priority': prStr}];
  },
  deleteTask: function(id){
    return this.tasks = this.tasks.filter(elem=> elem.id !== id);
  },
  newTask: function(id,newTitle,newPriority){
   return this.tasks = this.tasks.map(elem=> elem.id === id ? {'title': newTitle, 'id': id, 'priority': newPriority } : elem);
  },
  sortTaskPriority: function(){
    return this.tasks = this.tasks.sort((a,b)=> a.priority - b.priority);
  },
};
console.log(todoList.addTask("Купить картошку", 3));
console.log(todoList.addTask("Отвести ребёнка на кружок", 4));
console.log(todoList.addTask("Сходить в больницу", 1));
console.log(todoList.addTask("Поменять карту в банке", 2));
console.log(todoList.tasks);

console.log(todoList.deleteTask(2));
console.log(todoList.newTask(5,"Заблокировать карту в банке", 1));
console.log(todoList.sortTaskPriority());

console.log(todoList.deleteTask(5));




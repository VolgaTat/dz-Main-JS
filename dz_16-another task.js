// Введение
// Обзор предыдущего задания: создание мини Task Manager'a с базовыми свойствами (ID, Name, Order).
// Расширение задачи
// Ввод нового типа задачи с дополнительным свойством Description.
// Цель: расширить функциональность без изменения исходных методов.
'use strict'
const toDoList = {
  "tasks" : [{'title': 'Помыть машину', 'id': 1, 'priority': 1}],
  addTask: function(titleStr, prStr){
    return this.tasks = [
      ...this.tasks,
      {'title': titleStr, 'id': this.tasks.length ? this.tasks.at(-1).id + 1 : 1,'priority': prStr}];
  },
  deleteTask: function(id){
    return this.tasks = this.tasks.filter(elem=> elem.id !== id);
  },
  updateTask: function (id, data) {
    const findIndex = this.tasks.findIndex((f) => f.id === id);
    if (findIndex == -1) {
        return;
    }
     return Object.assign(this.tasks[findIndex], data);
},
  // sortTaskPriority: function(){
  //   return this.tasks = this.tasks.sort((a,b)=> a.priority - b.priority);
  // },
  sortTaskPriority: function (fn = undefined, desc = false) {
    if(!fn){
        return (this.tasks = this.tasks.sort((a, b) => a.priority - b.priority));
    }
    return this.tasks.sort((a,b)=> fn(a,b,desc))
  },
};
const dataObj = {
  text: 'Новый текст',
  number: 84,
  title: 'Тестовая запись',
  priority: 2,
  priority: 22
}
const newTask = {
  tasks: [],
};

function sortById(a, b, desc = false){
  return desc ? b.id - a.id : a.id - b.id
}

console.log(toDoList.addTask.apply(newTask, ["11111111", 3]));
console.log(toDoList.addTask.apply(newTask, ["222222222", 1]));
console.log(toDoList.addTask.apply(newTask, ["333333333", 9]));
console.log(toDoList.addTask.apply(newTask, ["333333333", 5]));
console.log(toDoList.deleteTask.call(newTask, 3));
console.log(toDoList.updateTask.call(newTask, 1, dataObj))
console.log(toDoList.sortTaskPriority.call(newTask, sortById, true))
console.log(newTask)








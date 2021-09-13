import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plac';
  arr:any;
  newTodo: string;
    todos: any;
    todoObj: any;
    updateValue : string;



  constructor() {
    this.newTodo = '';
    this.todos = JSON.parse(localStorage.getItem("todos"));
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
      isEditing: false
    };
    console.log(localStorage.getItem("todos"));
    if(!this.todos){
      this.todos = [];
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    localStorage.setItem("todos",JSON.stringify(this.todos));
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(index) {
    this.todos[index].isEditing = true;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  updateTodo(index, updateValue) {
    this.todos[index].newTodo = updateValue;
    this.todos[index].isEditing = false;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
        localStorage.setItem("todos",JSON.stringify(this.todos));
      }
    }
  }

}
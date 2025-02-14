import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  tasks: { text: string, completed: boolean }[] = [];
  newTask: string = '';
  filter: string = 'all';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = ''; // Limpiar input de entrada
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }
     
  getFilteredTasks() {
    if (this.filter === 'active') {
      return this.tasks.filter(task => !task.completed);
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks; 
  }

  setFilter(filterType: string) {
    this.filter = filterType;
  }
}
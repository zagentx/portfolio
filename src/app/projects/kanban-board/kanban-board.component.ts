import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  isEditable = false;
  isTitleEditable = -1;

  isModalOpen = false;
  isBlurred = false;

  columns = [
    {
      title: 'To Do',
      tasks: [] as string[],
      newTask: '',
    },
    {
      title: 'In Progress',
      tasks: [] as string[],
      newTask: '',
    },
    {
      title: 'Done',
      tasks: [] as string[],
      newTask: '',
    },
  ];

  ngOnInit() {
    const savedColumns = localStorage.getItem('columns');
    if (savedColumns) {
      this.columns = JSON.parse(savedColumns);
    }
  }

  addTask(column: { newTask: string; tasks: any[] }) {
    if (column.newTask) {
      column.tasks.push(column.newTask);
      column.newTask = '';
      this.saveTasks();
    }
  }

  moveTask(taskIndex: number, fromColumnIndex: number, toColumnIndex: number) {
    const task = this.columns[fromColumnIndex].tasks.splice(taskIndex, 1)[0];
    this.columns[toColumnIndex].tasks.push(task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

  toggleTitleEdit(index: number) {
    this.isTitleEditable = this.isTitleEditable === index ? -1 : index;
  }

  deleteTask(columnIndex: number, taskIndex: number) {
    this.columns[columnIndex].tasks.splice(taskIndex, 1);
    this.saveTasks();
  }

  addColumn() {
    this.columns.push({
      title: 'Titel ...',
      tasks: [] as string[],
      newTask: '',
    });
    this.saveTasks();
  }

  deleteColumn(index: number) {
    this.columns.splice(index, 1);
    this.saveTasks();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isBlurred = false;
  }

  blurreContaner() {
    this.isBlurred = !this.isBlurred;
  }
}

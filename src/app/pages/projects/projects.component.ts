import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCardClickSl() {
    this.router.navigate(['/shopping-list']);
  }

  onCardClickKb() {
    this.router.navigate(['/kanban-board']);
  }

  onCardClickQa() {
    this.router.navigate(['/quiz-app']);
  }
}

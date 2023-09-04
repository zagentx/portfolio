import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ShoppingListComponent } from './projects/shopping-list/shopping-list.component';
import { CanbanBoardComponent } from './projects/canban-board/canban-board.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'canban-board', component: CanbanBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

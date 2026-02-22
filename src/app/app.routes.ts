import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TodosComponent } from './components/todos/todos';

export const routes: Routes = [
    {path: '', component: Home},
    { path: 'about', component: About },
    { path: 'todo', component: TodosComponent }
];

import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {path:'', component:HeaderComponent},
  { path: 'category', component: CategoryComponent }
];
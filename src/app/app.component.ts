import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
  

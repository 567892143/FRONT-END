import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,  // Ensure it's a standalone component
  imports: [CommonModule],  // Required for common directives like *ngIf, *ngFor
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {}

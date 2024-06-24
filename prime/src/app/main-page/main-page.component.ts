import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public static Route = {
    path: 'main-page',
    title: 'Main Page',
    component: MainPageComponent,
    canActivate: []
  };
constructor(
) {}
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarViewPageComponent } from './pages/calendar-view-page/calendar-view-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarViewPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sticky-planner-fe';
}

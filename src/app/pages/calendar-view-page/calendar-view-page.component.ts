import { Component } from '@angular/core';
import { AngularCalendarComponent } from '../../components/angular-calendar/angular-calendar.component';

@Component({
  selector: 'app-calendar-view-page',
  standalone: true,
  imports: [AngularCalendarComponent],
  templateUrl: './calendar-view-page.component.html',
  styleUrl: './calendar-view-page.component.css'
})
export class CalendarViewPageComponent {

}

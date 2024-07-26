import { Component, HostListener } from '@angular/core';
import { AngularCalendarComponent } from '../../components/angular-calendar/angular-calendar.component';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-view-page',
  standalone: true,
  imports: [
    AngularCalendarComponent,
    CalendarModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './calendar-view-page.component.html',
  styleUrl: './calendar-view-page.component.css',
})
export class CalendarViewPageComponent {
  public calendarView = CalendarView;
  public view: CalendarView = CalendarView.Month;
  public viewDate: Date = new Date();
  public events: CalendarEvent[] = [];

  public getScreenWidth: any;
  public getScreenHeight: any;

  // Form Controls
  calendarFilter = new FormControl(this.view);

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth > 1000) {
      this.view = CalendarView.Month;
      return;
    }
    if (this.getScreenWidth > 600) {
      this.view = CalendarView.Week;
      return;
    }

    this.view = CalendarView.Day;
  }

  changeCalendarView() {
    switch (this.calendarFilter.value) {
      case 'month':
        return CalendarView.Month;
      case 'week':
        return CalendarView.Week;
      case 'day':
        return CalendarView.Day;
      default:
        return CalendarView.Month;
    }
  }
}

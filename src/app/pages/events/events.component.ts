import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    { title: 'Food Drive', date: 'March 15, 2025', location: 'Community Center', description: 'Help us distribute meals.', image: 'assets/images/event1.jpg' },
    { title: 'Fundraising Gala', date: 'April 10, 2025', location: 'City Hall', description: 'Join us for an evening of giving.', image: 'assets/images/event2.jpg' }
  ];
}

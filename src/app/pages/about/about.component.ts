import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  milestones = [
    { year: 2015, event: 'Ate at Ako was founded with a mission to support underprivileged children.' },
    { year: 2017, event: 'First major outreach program successfully helped 500+ children.' },
    { year: 2020, event: 'Expanded to 10 communities and launched an education program.' },
    { year: 2023, event: 'Reached 5,000 children with feeding and mentorship programs.' }
  ];
}

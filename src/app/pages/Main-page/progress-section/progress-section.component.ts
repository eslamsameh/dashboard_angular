import {Component} from '@angular/core';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent {
  progressInfoData = [
    {
      title: 'Today’s Profit',
      value: 572900,
      activeProgress: 70,
      description: 'Better than last week (70%)',
    },
    {
      title: 'New Orders',
      value: 6378,
      activeProgress: 30,
      description: 'Better than last week (30%)',
    },
    {
      title: 'New Products',
      value: 7786786,
      activeProgress: 90,
      description: 'Better than last week (90%)',
    },

  ];
}

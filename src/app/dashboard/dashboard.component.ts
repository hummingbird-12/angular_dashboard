import { Component, OnInit } from '@angular/core';

import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DASHBOARD_COLUMN = 3;
  dummyColumn = new Array(this.DASHBOARD_COLUMN);

  widgetArray: Array<Array<Widget>>;
  widgetTypes: Array<object>;

  constructor(private widgetService: WidgetService) {
  }

  ngOnInit() {
    this.getWidgetTypes();
    this.getWidgetArray();
  }

  getWidgetTypes(): void {
    WidgetService.getWidgetTypes()
      .subscribe(
        widgetTypes => {
          this.widgetTypes = widgetTypes;
        },
        error => {
          this.widgetTypes = [];
          console.error(error);
        });
  }

  getWidgetArray(): void {
    this.widgetService.getWidgetArray()
      .subscribe(
        widgetArray => {
          this.widgetArray = widgetArray;
        },
        error => {
          this.widgetArray = [];
          console.error(error);
        }
      );
  }

}

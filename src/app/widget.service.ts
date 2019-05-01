import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { WIDGET_TYPES } from './mock-widget-types';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  DASHBOARD_COLUMN = 3;
  widgets: Array < Widget >;
  widgetSort: Array < Widget >;
  widgetArray: Array < Array < Widget > >;

  constructor() { }

  public static getWidgetTypes(): Observable < Array < object > > {
    if (!WIDGET_TYPES) {
      return throwError('Error fetching widget types!!');
    }
    return of(WIDGET_TYPES);
  }

  private static getWidgets(): Observable < Array < Widget > > {
    return of(WIDGETS);
  }

  private static sortWidgets(widgets: Array < Widget >): Array < Widget > {
    return widgets.sort((widget1, widget2) => {
      if (widget1.order > widget2.order) {
        return 1;
      }
      if (widget1.order < widget2.order) {
        return -1;
      }
      return 0;
    });
  }

  private makeWidgetArray(widgets: Array < Widget >): Array < Array < Widget > > {
    let rowCount = 1;
    let currentSpan = 0;
    let tmpArray: Array < Widget > = [];
    const widgetArray: Array < Array < Widget > > = [];

    let iter: any;
    for (iter of Object.keys(widgets)) {
      if (currentSpan + this.widgetSort[iter].colSpan > this.DASHBOARD_COLUMN) {
        widgetArray.push(tmpArray);
        tmpArray = [];
        currentSpan = 0;
        rowCount++;
      }
      tmpArray.push(this.widgetSort[iter]);
      currentSpan += this.widgetSort[iter].colSpan;
    }
    widgetArray.push(tmpArray);

    return widgetArray;
  }

  public getWidgetArray(): Observable < Array < Array < Widget > > > {
    WidgetService.getWidgets().subscribe(widgets => this.widgets = widgets);
    if (!this.widgets) {
      return throwError('Error fetching widgets!!');
    }
    this.widgetSort = WidgetService.sortWidgets(this.widgets);
    this.widgetArray = this.makeWidgetArray(this.widgetSort);
    return of(this.widgetArray);
  }

}

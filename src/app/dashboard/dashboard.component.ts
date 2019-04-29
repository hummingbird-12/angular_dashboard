import { Component, OnInit } from '@angular/core';

import { WIDGETS } from '../mock-widgets';
import { Widget } from '../widget';
import { AlertComponent } from '../alert/alert.component';
import { BadgeComponent } from '../badge/badge.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { CardComponent } from '../card/card.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CollapseComponent } from '../collapse/collapse.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormComponent } from '../form/form.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { ListGroupComponent } from '../list-group/list-group.component';
import { MediaComponent } from '../media/media.component';
import { ModalComponent } from '../modal/modal.component';
import { NavsComponent } from '../navs/navs.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { PopoverComponent } from '../popover/popover.component';
import { ProgressComponent } from '../progress/progress.component';
import { ScrollspyComponent } from '../scrollspy/scrollspy.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ToastComponent } from '../toast/toast.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DASHBOARD_COLUMN = 3;
  DASHBOARD_ROW;
  DASHBOARD_MAX_ROW = 1000;
  dummyColumn = new Array(this.DASHBOARD_COLUMN);
  dummyRow = new Array(this.DASHBOARD_ROW);

  widgets = WIDGETS;
  sortedWidgets: Array < Widget >;
  widgetArray: Array < Array < Widget > > = [];

  widgetTypes = [
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    FormComponent,
    InputGroupComponent,
    JumbotronComponent,
    ListGroupComponent,
    MediaComponent,
    ModalComponent,
    NavsComponent,
    NavbarComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnerComponent,
    ToastComponent,
    TooltipComponent
  ];

  constructor() { }

  ngOnInit() {
    let rowCount = 1;
    let currentSpan = 0;
    let tmpArray: Widget[] = [];

    this.sortedWidgets = this.widgets.sort((widget1, widget2) => {
      if (widget1.order > widget2.order) {
        return 1;
      }
      if (widget1.order < widget2.order) {
        return -1;
      }
      return 0;
    });

    let iter: any;
    for (iter of Object.keys(this.sortedWidgets)) {
      if (currentSpan + this.sortedWidgets[iter].colSpan > this.DASHBOARD_COLUMN) {
        this.widgetArray.push(tmpArray);
        tmpArray = [];
        currentSpan = 0;
        rowCount++;
      }
      tmpArray.push(this.sortedWidgets[iter]);
      currentSpan += this.sortedWidgets[iter].colSpan;
    }
    this.widgetArray.push(tmpArray);

    this.DASHBOARD_ROW = rowCount;
  }

}

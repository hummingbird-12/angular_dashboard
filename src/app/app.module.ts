import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './form/form.component';
import { ProgressComponent } from './progress/progress.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { NavsComponent } from './navs/navs.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { PaginationComponent } from './pagination/pagination.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MediaComponent } from './media/media.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PopoverComponent } from './popover/popover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ToastComponent } from './toast/toast.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputGroupComponent } from './input-group/input-group.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent,
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
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
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
  ]
})
export class AppModule { }

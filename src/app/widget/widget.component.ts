import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Compiler,
  ChangeDetectorRef, ComponentRef, OnChanges, AfterViewInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() type;
  @ViewChild('widgetTitle') widgetTitle;
  @ViewChild('widgetWrap', { read: ViewContainerRef }) widgetWrap;
  private isViewInitialized = false;
  cmpRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdRef: ChangeDetectorRef ) { }

  ngOnInit() {
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.widgetWrap.createComponent(factory);

    this.widgetTitle.nativeElement.textContent = this.cmpRef.instance.title;

    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}

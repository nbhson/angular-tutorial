import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertContentComponent } from '../alert-content/alert-content.component';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit {

  @ViewChild('container', {
    read: ViewContainerRef,
    static: true // true: có thể dùng từ OnInit; false: dùng từ afterviewInit
  })
  container!: ViewContainerRef;

  componentRef!: ComponentRef<AlertContentComponent>

  constructor(private _alertService: AlertService) { }

  ngOnInit(): void {
    this._alertService.close$.subscribe(
      () => {
        this.container.clear()

        if (this.componentRef) {
          this.componentRef.destroy()
        }
      },
      (err) => {

      }
    )
  }
  
  ngAfterViewInit(): void {
    this.renderComponent()
  }

  renderComponent() {
    const container = this.container
    container.clear()
    const injector = container.injector

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver)
    const componentFactory = cfr.resolveComponentFactory(AlertContentComponent)
    // const componentRef = container.createComponent(componentFactory, container.length, injector)
    const componentRef = container.createComponent(componentFactory, 0, injector)

    // gán giá trị cho dyamic component
    componentRef.instance.data = 'Message from container'
    // fix err ExpressionChangedAfterItHasBeenCheckedError
    componentRef.changeDetectorRef.detectChanges();

    this.componentRef = componentRef
  }
}

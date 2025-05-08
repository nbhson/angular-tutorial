# RouterOutletData

With Angular 19, a new routerOutletData input has been added to RouterOutlet, providing a streamlined way for parent components to send data to their child components routed through the outlet. When routerOutletData is set, the associated data becomes accessible in child components through the ROUTER_OUTLET_DATA token, which employs a Signal type. This design allows for dynamic updates, ensuring that changes in the input data automatically reflect within the child component, eliminating the need for static assignments. 

Parent component:

```html
<router-outlet [routerOutletData]="routerOutletData()" />
```

Child component routed through the outlet:

```ts
export class ChildComponent {
  readonly routerOutletData: Signal<MyType> = inject(ROUTER_OUTLET_DATA);
}
```

## Reference

https://angular.love/angular-19-whats-new

https://stackblitz.com/edit/stackblitz-starters-2vvbqk9i?file=package.json
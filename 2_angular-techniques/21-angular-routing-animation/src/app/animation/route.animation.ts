import { trigger, query, transition, style, animate, group } from '@angular/animations';

const slideToRight = [
  query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 }), { optional: true }),
  query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateX(-100%)' }), { optional: true }),
  group([
    query(':leave', [
      animate('.3s ease-in-out', style({ transform: 'translateX(100%)' })),
    ], { optional: true }),
    query(':enter', [
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' })),
    ], { optional: true })
  ])
];

const slideToLeft = [
  query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 }), { optional: true }),
  query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
  group([
    query(':leave', [
      animate('.3s ease-in-out', style({ transform: 'translateX(-100%)' })),
    ], { optional: true }),
    query(':enter', [
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' })),
    ], { optional: true })
  ])
];

export const SLIDE_TO_LEFT = trigger('routeAnimations', [
  transition('* => category', slideToLeft),
  transition('* => product', slideToLeft),
  transition('* => user', slideToLeft),
])


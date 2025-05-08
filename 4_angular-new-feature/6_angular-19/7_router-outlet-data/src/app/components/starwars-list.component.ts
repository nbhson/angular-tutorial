import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { FighterList } from '../interfaces/fighter-list.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-starwars-list',
  template: `{{ fighterListChange() | json }}`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe]
})
export default class StarwarsListComponent {
  fighterList = inject(ROUTER_OUTLET_DATA) as Signal<FighterList>;

  fighterListChange = computed<FighterList>(() => {
    if (this.fighterList()) {
      return this.fighterList()
    }
    return { ids: [], isSith: false };
  });

  ngAfterViewInit(): void {
    console.log(this.fighterList());
  }
}

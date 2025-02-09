import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { UIService } from "../abstract/ui-service";
import { IHeroUIService } from "../interface/hero_interface";
import { HeroViewModel } from "../model/hero.comp.view-model";

@Injectable()
export class BatmanHeroUIservice extends UIService<HeroViewModel> implements IHeroUIService {

  private canFlySubscription!: Subscription;

  constructor() {
    super(new HeroViewModel('Batman', false));
  }

  override ngOnInit(): void {
    this.canFlySubscription = this.model.canFlyChanged.subscribe((newValue: boolean) => console.log('Batman canFly has changed to ' + newValue));
  }

  onDestroy(): void {
    this.canFlySubscription.unsubscribe();
  }
}
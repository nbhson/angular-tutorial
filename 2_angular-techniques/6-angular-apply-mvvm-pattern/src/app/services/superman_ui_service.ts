import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { UIService } from "../abstract/ui-service";
import { IHeroUIService } from "../interface/hero_interface";
import { HeroViewModel } from "../model/hero.comp.view-model";

/**
 * And this is where all of the business logic will go.
 * We can further inject root services, or any other services
 * that we might need.
 */
@Injectable()
export class SupermanHeroUiService extends UIService<HeroViewModel> implements IHeroUIService {

  private canFlySubscription!: Subscription;

  constructor() {
    super(new HeroViewModel('Superman', true));
  }

  override ngOnInit(): void {
    /** Set some default values on our view-model */
    this.canFlySubscription = this.model.canFlyChanged.subscribe((newValue: boolean) => console.log('Superman canFly has changed to ' + newValue));
  }

  onDestroy(): void {
    this.canFlySubscription.unsubscribe();
  }
}
import { UIService } from "../abstract/ui-service";
import { HeroViewModel } from "../model/hero.comp.view-model";

export interface IHeroUIService extends UIService<HeroViewModel>{

  /**
   * We'll add this method just as an example.
   * Will be called when the component is destroyed.
   */
  onDestroy(): void;
}
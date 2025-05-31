import { EventEmitter, Injectable } from "@angular/core";
import { UIService } from "../abstract/ui-service";
import { HeroViewModel } from "../model/hero.comp.view-model";

/**
 * Đây là nơi xử lí tất cả các business logic.
 * Có thể thêm tùy ý những service cần thiết
 */
@Injectable()
export class HeroUiService extends UIService<HeroViewModel>{
  override ngOnInit(): void {
    /** Set some default values on our view-model */
    this.model = new HeroViewModel('Superman', true)

    this.model.canFlyChanged.subscribe((newValue: boolean) => {
      console.log('CanFly has changed to ' + newValue);
    })
  }
}
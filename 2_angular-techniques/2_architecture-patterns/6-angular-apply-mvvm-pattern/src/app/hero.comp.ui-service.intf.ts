import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";
import { IHeroUIService } from "./interface/hero_interface";
import { BatmanHeroUIservice } from "./services/batman_ui_service";
import { SupermanHeroUiService } from "./services/superman_ui_service";

/** We will use this InjectionToken in our component */
export const HERO_UI_SERVICE_TOKEN: InjectionToken<IHeroUIService> = new InjectionToken<IHeroUIService>('heroUIService');

/**
 * This method will return the right IHeroUIService instance
 * based on the environment.superhero value.
 */
export function heroUIServiceFactory(): IHeroUIService {
    if (environment.superhero.endsWith('Batman')) {
        return new BatmanHeroUIservice();
    }
    return new SupermanHeroUiService();
}
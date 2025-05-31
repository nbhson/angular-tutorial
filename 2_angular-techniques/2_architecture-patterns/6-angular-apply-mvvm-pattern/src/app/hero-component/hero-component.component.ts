import { Component, Inject } from '@angular/core';
import { UIComponent } from '../abstract/ui-component';
import { heroUIServiceFactory, HERO_UI_SERVICE_TOKEN } from '../hero.comp.ui-service.intf';
import { IHeroUIService } from '../interface/hero_interface';
import { HeroViewModel } from '../model/hero.comp.view-model';
import { HeroUiService } from '../services/hero.comp.ui-service';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss'],
  providers: [
    { provide: HERO_UI_SERVICE_TOKEN, useFactory: heroUIServiceFactory, deps: [] }
  ]
})
export class HeroComponentComponent extends UIComponent<HeroViewModel> {

  constructor(@Inject(HERO_UI_SERVICE_TOKEN) private heroService: IHeroUIService) {
    super(heroService);
  }
}

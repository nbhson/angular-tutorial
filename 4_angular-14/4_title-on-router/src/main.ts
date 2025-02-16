import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, TitleStrategy } from '@angular/router';
import { appRouting } from './app/routes/app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTitleStrategy } from './app/services/title-custom.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(appRouting),
      BrowserAnimationsModule
    ),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
})
.catch(err => console.error(err));


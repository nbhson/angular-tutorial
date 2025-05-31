import { Component } from '@angular/core';
import { AppConfigurationProvider } from 'src/app.config.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private configProvider: AppConfigurationProvider
  ) { }

  ngOnInit() {
    // this.configProvider.load();
    // console.log(this.configProvider.config);
    
  }
}

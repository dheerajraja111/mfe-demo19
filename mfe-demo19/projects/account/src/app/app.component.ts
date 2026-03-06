import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUiService } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  sharedSrv = inject(SharedUiService);
  title = 'account';

  constructor() {
    debugger;
    const value = this.sharedSrv.commonData.appName;
  }
}

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// if this file is missing, start knapsack to generate it
import { KsAppModule } from './dist/ks-ng-app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(KsAppModule)
  .catch((err) => console.error(err));

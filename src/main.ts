import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment.dev";
import { hmrBootstrap } from "./hmr";
import { AppModule } from "./app/";

(<any>window).environment = environment;

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module["hot"]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error("Ammm.. HMR is not enabled for webpack");
  }
} else {
  bootstrap();
}

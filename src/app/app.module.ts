import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { SharedModule } from './bz-modules/shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { SharedModule } from './common/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { AuthGuard } from './common/guard/auth.guard';
import { AuthService } from './common/services/auth.service';



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
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    LoadingModule,
    GrowlModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [MessageService, AuthGuard, AuthService, TranslateService, TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }

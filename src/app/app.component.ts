import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EventBusService } from './shared/services/event-bus.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public loading = false;
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translateService: TranslateService,
		private eventBusService: EventBusService
	) {

	}

	ngOnInit() {
		const browserLang = this.translateService.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		console.log(browserLang.match(/zh|en/) ? browserLang : 'zh');

		this.translateService.addLangs(["zh", "en"]);
		this.translateService.setDefaultLang('en');
		this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');

		this.eventBusService.showGlobalLoading.subscribe((value: boolean) => {
			this.loading = value;
		});
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				this.eventBusService.showGlobalLoading.next(true);
			}
			if (event instanceof NavigationEnd ||
				event instanceof NavigationError ||
				event instanceof NavigationCancel) {
				this.eventBusService.showGlobalLoading.next(false);
			}
		});
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}
